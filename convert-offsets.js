// Node.js script to convert off-decrypts.h to JavaScript data
const fs = require('fs');
const path = require('path');

function parseHeaderFile(content) {
    const offsets = {
        player: { name: 'PLAYER', offsets: {} },
        world: { name: 'WORLD', offsets: {} },
        weapon: { name: 'WEAPON', offsets: {} },
        camera: { name: 'CAMERA', offsets: {} },
        network: { name: 'NETWORK', offsets: {} }
    };

    let gameVersion = null;
    let gameDate = null;

    // Extract version and date from comments
    const versionMatch = content.match(/rust version:\s*([^\n]*)/i);
    const dateMatch = content.match(/date:\s*([^\n]*)/i);
    
    if (versionMatch && versionMatch[1].trim()) {
        gameVersion = versionMatch[1].trim();
    }
    
    if (dateMatch && dateMatch[1].trim()) {
        gameDate = dateMatch[1].trim();
    }

    // Parse namespace blocks
    const namespaceRegex = /namespace\s+(\w+)\s*\{([^}]+)\}/g;
    let match;

    while ((match = namespaceRegex.exec(content)) !== null) {
        const namespaceName = match[1];
        const namespaceContent = match[2];
        
        // Parse offsets within namespace
        const offsetRegex = /inline\s+constexpr\s+std::\w+\s+(\w+)\s*=\s*(0x[0-9a-fA-F]+);/g;
        let offsetMatch;

        while ((offsetMatch = offsetRegex.exec(namespaceContent)) !== null) {
            const offsetName = offsetMatch[1];
            const offsetValue = offsetMatch[2];
            
            // Categorize offsets based on namespace
            if (namespaceName.toLowerCase().includes('player') || namespaceName === 'BasePlayer') {
                offsets.player.offsets[offsetName] = offsetValue;
            } else if (namespaceName.toLowerCase().includes('camera') || namespaceName === 'main_camera') {
                offsets.camera.offsets[offsetName] = offsetValue;
            } else if (namespaceName.toLowerCase().includes('projectile') || namespaceName === 'BaseProjectile') {
                offsets.weapon.offsets[offsetName] = offsetValue;
            } else if (namespaceName.toLowerCase().includes('networkable') || namespaceName === 'base_networkable') {
                offsets.network.offsets[offsetName] = offsetValue;
            } else {
                // Default to world category for other offsets
                offsets.world.offsets[offsetName] = offsetValue;
            }
        }
    }

    return {
        version: gameVersion || generateVersionFromDate(),
        date: gameDate || new Date().toISOString(),
        offsets: offsets
    };
}

function generateVersionFromDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}.1`;
}

function convertToJS() {
    try {
        // Read the header file
        const headerPath = path.join(__dirname, 'off-decrypts.h');
        const content = fs.readFileSync(headerPath, 'utf8');
        
        // Parse the content
        const parsedData = parseHeaderFile(content);
        
        // Generate JavaScript code
        const jsCode = `// Auto-generated from off-decrypts.h
// Generated at: ${new Date().toISOString()}

window.RUST_OFFSETS_DATA = ${JSON.stringify(parsedData, null, 2)};

// Auto-update offsets when this script loads
if (typeof updateOffsetsFromData === 'function') {
    updateOffsetsFromData(window.RUST_OFFSETS_DATA);
}
`;
        
        // Write to offsets-data.js
        const outputPath = path.join(__dirname, 'offsets-data.js');
        fs.writeFileSync(outputPath, jsCode);
        
        console.log('✅ Successfully converted off-decrypts.h to offsets-data.js');
        console.log(`📊 Found ${Object.values(parsedData.offsets).reduce((total, cat) => total + Object.keys(cat.offsets).length, 0)} offsets`);
        console.log(`🎮 Game version: ${parsedData.version}`);
        
        return true;
    } catch (error) {
        console.error('❌ Error converting file:', error.message);
        return false;
    }
}

// Run if called directly
if (require.main === module) {
    convertToJS();
}

module.exports = { convertToJS, parseHeaderFile };