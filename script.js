// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Copy offset values to clipboard
document.querySelectorAll('.offset-value').forEach(element => {
    element.addEventListener('click', function() {
        const text = this.textContent;
        navigator.clipboard.writeText(text).then(() => {
            // Visual feedback
            this.classList.add('copied');
            const originalText = this.textContent;
            this.textContent = 'COPIED';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('copied');
            }, 1000);
        }).catch(err => {
            console.error('Copy error: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            this.classList.add('copied');
            const originalText = this.textContent;
            this.textContent = 'COPIED';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('copied');
            }, 1000);
        });
    });
});

// Auto-update last update time
function updateLastUpdateTime() {
    const now = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    const timeString = now.toLocaleDateString('en-GB', options).replace(',', '');
    const lastUpdateElement = document.getElementById('last-update');
    if (lastUpdateElement) {
        lastUpdateElement.textContent = timeString;
    }
}

// Embedded offsets data from off-decrypts.h
const EMBEDDED_OFFSETS = `// rust dumper made by martin
// rust version: 
// date: 
                    
namespace offsets { 
    namespace il2cpp {
        inline constexpr std::uintptr_t get_handle = 0xe7a19c0;
    } //  il2cpp

    namespace base_networkable {
        inline constexpr std::uintptr_t typeinfo = 0xe441bc0;

        inline constexpr std::uint32_t static_fields = 0xb8;
        inline constexpr std::uint32_t client_entities = 0x18;
        inline constexpr std::uint32_t entity_list = 0x10;
        inline constexpr std::uint32_t buffer = 0x18;
        inline constexpr std::uint32_t entListBase = 0x10;
        inline constexpr std::uint32_t entLS = 0x18;
    } // base_networkable

    namespace main_camera {
        inline constexpr std::uintptr_t typeinfo = 0xe46fcb8;

        inline constexpr std::uint32_t static_fields = 0xb8;
        inline constexpr std::uint32_t instance = 0x90;
        inline constexpr std::uint32_t buffer = 0x10;
    } // main_camera

                                       
    namespace BasePlayer {
        inline constexpr std::uintptr_t username = 0x390;
        inline constexpr std::uintptr_t team = 0x4b8;
        inline constexpr std::uintptr_t playerModel = 0x508;
        inline constexpr std::uintptr_t playerFlags = 0x630;
        inline constexpr std::uintptr_t playerInput = 0x670;
        inline constexpr std::uintptr_t clActiveItem = 0x4e8;
        inline constexpr std::uintptr_t playerInventory = 0x420;
    } // BasePlayer

    namespace PlayerInput {
        inline constexpr std::uintptr_t bodyAngles = 0x44;
    } // PlayerInput

    namespace BaseEntity {
        inline constexpr std::uintptr_t model = 0xf0;
    } // BaseEntity

    namespace Item {
        inline constexpr std::uintptr_t itemDefinition = 0xb0;
        inline constexpr std::uintptr_t itemUid = 0x48;
        inline constexpr std::uintptr_t itemUid2 = 0x90;
        inline constexpr std::uintptr_t itemUid3 = 0x98;
        inline constexpr std::uintptr_t itemUid4 = 0xb8; // test these
        inline constexpr std::uintptr_t heldEntity = 0x78; // test these
        inline constexpr std::uintptr_t heldEntity2 = 0xa0;
        inline constexpr std::uintptr_t health = 0;
        inline constexpr std::uintptr_t maxHealth = 0;
    } // Item

    namespace BaseCombatEntity {
        inline constexpr std::uintptr_t lifeState = 0x270;
        inline constexpr std::uintptr_t health = 0x27c;
        inline constexpr std::uintptr_t maxHealth = 0x280;
    } // BaseCombatEntity

    namespace BaseProjectile {
        inline constexpr std::uintptr_t recoilProp = 0x3a8;
        inline constexpr std::uintptr_t primaryMagazine = 0x380;
    } // BaseProjectile

    namespace BaseViewModel {
        inline constexpr std::uintptr_t BaseViewModel_C = 0xe3de598;
        inline constexpr std::uintptr_t animationEvents = 0xd0;
        inline constexpr std::uintptr_t list = 0x1b8;
    } // BaseViewModel

    namespace ItemContainer {
        inline constexpr std::uintptr_t list = 0x18;
    } // ItemContainer

    namespace ItemDefinition {
        inline constexpr std::uintptr_t shortName = 0x28;
        inline constexpr std::uintptr_t itemDisplayName = 0x40;
        inline constexpr std::uintptr_t itemModWearable = 0x158;
        inline constexpr std::uintptr_t itemDisplayEnglish = 0;
    } // ItemDefinition

    namespace ListComponent_Projectile {
        inline constexpr std::uintptr_t ListComponent_C = 0xe45e370;
        inline constexpr std::uintptr_t static_fields = 0xb8;
        inline constexpr std::uintptr_t parent_static = 0x10;
        inline constexpr std::uintptr_t buffer = 0x10;
    } // ListComponent_Projectile

    namespace Magazine {
        inline constexpr std::uintptr_t Capacity = 0;
        inline constexpr std::uintptr_t Contents = 0;
    } // Magazine

    namespace Model {
        inline constexpr std::uintptr_t rootBone = 0x28;
        inline constexpr std::uintptr_t headBone = 0x30;
        inline constexpr std::uintptr_t boneTransforms = 0x50;
    } // Model

    namespace PlayerEyes {
        inline constexpr std::uintptr_t viewOffset = 0x40;
        inline constexpr std::uintptr_t bodyRotation = 0x50;
        inline constexpr std::uintptr_t eyeRotation = 0;
        inline constexpr std::uintptr_t unkQuanternion = 0x6c;
    } // PlayerEyes

    namespace PlayerInventory {
        inline constexpr std::uintptr_t container1 = 0x38; // test these
        inline constexpr std::uintptr_t container2 = 0x58;
        inline constexpr std::uintptr_t container3 = 0x78;
    } // PlayerInvetory

    namespace PlayerModel {
        inline constexpr std::uintptr_t position = 0x1f8;
        inline constexpr std::uintptr_t velocity = 0x21c;
        inline constexpr std::uintptr_t newVelocity = 0;
        inline constexpr std::uintptr_t SkinnedMultiMesh = 0x358;
    } // PlayerModel

    namespace RecoilProperties {
        inline constexpr std::uintptr_t recoilYawMin = 0x18;
        inline constexpr std::uintptr_t recoilYawMax = 0x1c;
        inline constexpr std::uintptr_t recoilPitchMin = 0x20;
        inline constexpr std::uintptr_t recoilPitchMax = 0x24;
        inline constexpr std::uintptr_t newRecoilOverride = 0x80;
    } // RecoilProperties

    namespace SkinnedMultiMesh {
        inline constexpr std::uintptr_t rendererList = 0x40;
    } // SkinnedMultiMesh

    namespace TOD_Sky {
        inline constexpr std::uintptr_t TOD_Sky_C = 0xe3d5bc8;
    } // namespace TOD_Sky
} // namespace offsets


//auto generated decrypt: client_entities
uintptr_t client_entities(uintptr_t a1) {
                                          
    uint32_t eax = 0, ecx = 0, r14d = 0;
    uintptr_t rax = 0, rbx = 0, rcx = a1, rdi = a1;

    rax = driver.read<uintptr_t>(rdi + 0x18);
    uint32_t* rdx = (uint32_t*)&rax;

    for (uint32_t r8d = 2; r8d > 0; --r8d) {
        // UNHANDLED INSTRUCTION: nop [rax], eax
        // UNHANDLED INSTRUCTION: nop [rax+rax*1], ax
        eax = *(uint32_t*)(rdx); // mov eax, [rdx]
        rdx = (uint32_t*)((uint8_t*)rdx + 0x04); // lea rdx, [rdx+0x04]
        eax += 0x5DF63C22; // add eax, 0x5DF63C22
        ecx = eax; // mov ecx, eax
        eax <<= 0x0A; // shl eax, 0x0A
        ecx >>= 0x16; // shr ecx, 0x16
        ecx |= eax; // or ecx, eax
        ecx += 0x482557EE; // add ecx, 0x482557EE
        ecx ^= 0x0DAFE798; // xor ecx, 0xDAFE798
        *((uint32_t*)rdx - 1) = ecx; // mov [rdx-0x04], ecx
    }

    return decryptIl2cppHandle(rax);
}


//auto generated decrypt: entity_list
uintptr_t entity_list(uintptr_t a1) {
                                          
    uint32_t eax = 0, ecx = 0, r14d = 0;
    uintptr_t rax = 0, rbx = 0, rcx = a1, rdi = a1;

    rax = driver.read<uintptr_t>(rdi + 0x18);
    uint32_t* rdx = (uint32_t*)&rax;

    for (uint32_t r8d = 2; r8d > 0; --r8d) {
        ecx = *(uint32_t*)(rdx); // mov ecx, [rdx]
        eax = *(uint32_t*)(rdx); // mov eax, [rdx]
        rdx = (uint32_t*)((uint8_t*)rdx + 0x04); // lea rdx, [rdx+0x04]
        ecx >>= 0x03; // shr ecx, 0x03
        eax <<= 0x1D; // shl eax, 0x1D
        eax |= ecx; // or eax, ecx
        eax ^= 0xFFFFFFFFD6D4FD17; // xor eax, 0xD6D4FD17
        eax += 0x6B7AF506; // add eax, 0x6B7AF506
        ecx = eax; // mov ecx, eax
        eax <<= 0x12; // shl eax, 0x12
        ecx >>= 0x0E; // shr ecx, 0x0E
        ecx |= eax; // or ecx, eax
        *((uint32_t*)rdx - 1) = ecx; // mov [rdx-0x04], ecx
    }

    return decryptIl2cppHandle(rax);
}

                               
// auto generated decrypt: cl_active_item
// if there is error in rdx = (uint32_t*)((uint8_t*) change uint32_t* to uintptr_t 
uintptr_t cl_active_item(uintptr_t a1) {

    uint32_t eax = 0, ebx = 0, ecx = 0, edx = 0, r8d = 0, r9d = 0;
    uintptr_t rax = 0, rbx = 0, rcx = a1, rdx = 0, r8 = 0, r9 = 0;

    uintptr_t val = a1;
    uintptr_t base_ptr = (uintptr_t)&val;
    rax = base_ptr; rdx = base_ptr; rcx = base_ptr; rbx = base_ptr; r8 = base_ptr; r9 = base_ptr;

    for (uint32_t i = 2; i > 0; --i) {
        // UNHANDLED INSTRUCTION: movups [rsp+0x20], xmm0
        // UNHANDLED INSTRUCTION: nop [rax+rax*1], ax
        ecx = *(uint32_t*)(rdx); // mov ecx, [rdx]
        eax = *(uint32_t*)(rdx); // mov eax, [rdx]
        rdx = (uint32_t*)((uint8_t*)rdx + 0x04); // lea rdx, [rdx+0x04]
        eax <<= 0x1D; // shl eax, 0x1D
        ecx >>= 0x03; // shr ecx, 0x03
        ecx |= eax; // or ecx, eax
        ecx += 0xFFFFFFFFB5616B18; // add ecx, 0xB5616B18
        eax = ecx; // mov eax, ecx
        ecx <<= 0x1A; // shl ecx, 0x1A
        eax >>= 0x06; // shr eax, 0x06
        eax |= ecx; // or eax, ecx
        *((uint32_t*)rdx - 1) = eax; // mov [rdx-0x04], eax
    }

    return val;
}

`;

// Parse offsets from embedded data
function parseEmbeddedOffsets() {
    const content = EMBEDDED_OFFSETS;
    const offsets = {
        player: { name: 'PLAYER', offsets: {} },
        world: { name: 'WORLD', offsets: {} },
        weapon: { name: 'WEAPON', offsets: {} },
        camera: { name: 'CAMERA', offsets: {} },
        network: { name: 'NETWORK', offsets: {} }
    };

    // Extract version and date from comments
    const versionMatch = content.match(/rust version:\s*([^\n]*)/i);
    const dateMatch = content.match(/date:\s*([^\n]*)/i);
    
    let gameVersion = null;
    if (versionMatch && versionMatch[1].trim()) {
        gameVersion = versionMatch[1].trim();
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
            if (namespaceName.toLowerCase().includes('player') || namespaceName === 'BasePlayer' || namespaceName === 'PlayerInput' || namespaceName === 'PlayerModel' || namespaceName === 'PlayerEyes' || namespaceName === 'PlayerInventory') {
                offsets.player.offsets[offsetName] = offsetValue;
            } else if (namespaceName.toLowerCase().includes('camera') || namespaceName === 'main_camera') {
                offsets.camera.offsets[offsetName] = offsetValue;
            } else if (namespaceName.toLowerCase().includes('projectile') || namespaceName === 'BaseProjectile' || namespaceName === 'RecoilProperties') {
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
        offsets: offsets
    };
}

// Parse decrypt functions from embedded data
function parseDecryptFunctions() {
    const content = EMBEDDED_OFFSETS;
    const decrypts = {
        entity: [],
        item: []
    };

    // Split content by decrypt function comments
    const sections = content.split(/\/\/\s*auto generated decrypt:/);
    
    for (let i = 1; i < sections.length; i++) {
        const section = sections[i];
        
        // Extract function name from the first line
        const lines = section.split('\n');
        const firstLine = lines[0].trim();
        const functionName = firstLine;
        
        // Find the function code (from uintptr_t to the closing brace)
        const functionStart = section.indexOf('uintptr_t');
        if (functionStart === -1) continue;
        
        let braceCount = 0;
        let functionEnd = -1;
        let inFunction = false;
        
        for (let j = functionStart; j < section.length; j++) {
            const char = section[j];
            if (char === '{') {
                braceCount++;
                inFunction = true;
            } else if (char === '}') {
                braceCount--;
                if (inFunction && braceCount === 0) {
                    functionEnd = j + 1;
                    break;
                }
            }
        }
        
        if (functionEnd !== -1) {
            const functionCode = section.substring(functionStart, functionEnd).trim();
            
            const decryptFunction = {
                name: functionName,
                description: `Auto-generated decrypt function for ${functionName}`,
                code: functionCode
            };

            // Categorize based on function name
            if (functionName.toLowerCase().includes('entity') || 
                functionName.toLowerCase().includes('client_entities') ||
                functionName.toLowerCase().includes('entity_list')) {
                decrypts.entity.push(decryptFunction);
            } else {
                decrypts.item.push(decryptFunction);
            }
        }
    }

    return decrypts;
}

// Update decrypts display
function updateDecryptsDisplay(decryptsData) {
    if (!decryptsData) return;

    // Update entity decrypts
    const entityContainer = document.getElementById('entity-decrypts');
    const entityCount = document.getElementById('entity-decrypt-count');
    
    if (entityContainer && decryptsData.entity) {
        entityContainer.innerHTML = '';
        decryptsData.entity.forEach(decrypt => {
            const decryptItem = createDecryptItem(decrypt);
            entityContainer.appendChild(decryptItem);
        });
        
        if (entityCount) {
            entityCount.textContent = decryptsData.entity.length;
        }
    }

    // Update item decrypts
    const itemContainer = document.getElementById('item-decrypts');
    const itemCount = document.getElementById('item-decrypt-count');
    
    if (itemContainer && decryptsData.item) {
        itemContainer.innerHTML = '';
        decryptsData.item.forEach(decrypt => {
            const decryptItem = createDecryptItem(decrypt);
            itemContainer.appendChild(decryptItem);
        });
        
        if (itemCount) {
            itemCount.textContent = decryptsData.item.length;
        }
    }

    // Update total count
    const totalCount = document.getElementById('decrypt-count');
    if (totalCount) {
        const total = decryptsData.entity.length + decryptsData.item.length;
        totalCount.textContent = total;
    }
}

// Create decrypt item element
function createDecryptItem(decrypt) {
    const item = document.createElement('div');
    item.className = 'decrypt-item';
    
    item.innerHTML = `
        <div class="decrypt-header">
            <div>
                <div class="decrypt-name">${decrypt.name}</div>
                <div style="font-size: 0.7rem; color: var(--light-gray); margin-top: 0.25rem;">${decrypt.description}</div>
            </div>
            <span class="decrypt-toggle">▼</span>
        </div>
        <div class="decrypt-code">
            <button class="copy-decrypt-btn">COPY</button>
            <pre>${decrypt.code}</pre>
        </div>
    `;

    // Add toggle functionality
    const header = item.querySelector('.decrypt-header');
    const codeSection = item.querySelector('.decrypt-code');
    const copyBtn = item.querySelector('.copy-decrypt-btn');

    header.addEventListener('click', () => {
        item.classList.toggle('expanded');
    });

    // Add copy functionality
    copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const code = decrypt.code;
        
        navigator.clipboard.writeText(code).then(() => {
            copyBtn.textContent = 'COPIED!';
            setTimeout(() => {
                copyBtn.textContent = 'COPY';
            }, 1000);
        }).catch(err => {
            console.error('Copy error:', err);
        });
    });

    return item;
}

// Download full file functionality
function downloadFullFile() {
    const content = EMBEDDED_OFFSETS;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'off-decrypts.h';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showUpdateNotification('off-decrypts.h downloaded successfully!');
}

function generateVersionFromDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}.1`;
}

// Update offsets display on the website
function updateOffsetsDisplay(offsetsData) {
    if (!offsetsData) return;

    Object.keys(offsetsData).forEach(categoryKey => {
        const category = offsetsData[categoryKey];
        const categoryElement = document.querySelector(`[data-category="${categoryKey}"]`);
        
        if (categoryElement && category.offsets) {
            const offsetGrid = categoryElement.querySelector('.offset-grid');
            const categoryCount = categoryElement.querySelector('.category-count');
            
            if (offsetGrid) {
                // Clear existing offsets
                offsetGrid.innerHTML = '';
                
                // Add new offsets
                const offsetEntries = Object.entries(category.offsets);
                offsetEntries.forEach(([name, value]) => {
                    const offsetItem = document.createElement('div');
                    offsetItem.className = 'offset-item';
                    offsetItem.innerHTML = `
                        <span class="offset-name">${name}</span>
                        <code class="offset-value">${value}</code>
                    `;
                    
                    // Add click to copy functionality
                    const offsetValue = offsetItem.querySelector('.offset-value');
                    offsetValue.addEventListener('click', function() {
                        const text = this.textContent;
                        navigator.clipboard.writeText(text).then(() => {
                            this.classList.add('copied');
                            const originalText = this.textContent;
                            this.textContent = 'COPIED';
                            
                            setTimeout(() => {
                                this.textContent = originalText;
                                this.classList.remove('copied');
                            }, 1000);
                        }).catch(err => {
                            console.error('Copy error: ', err);
                        });
                    });
                    
                    offsetValue.title = 'Click to copy to clipboard';
                    
                    offsetGrid.appendChild(offsetItem);
                });
                
                // Update count
                if (categoryCount) {
                    categoryCount.textContent = offsetEntries.length;
                }
            }
        }
    });
}

// Load and update offsets from embedded data
async function loadOffsetsFromFile() {
    const fileDot = document.querySelector('.file-dot');
    
    try {
        showUpdateNotification('Loading offsets and decrypts from embedded data...');
        
        if (fileDot) {
            fileDot.className = 'file-dot';
        }
        
        const parsedData = parseEmbeddedOffsets();
        const decryptsData = parseDecryptFunctions();
        
        if (parsedData && parsedData.offsets) {
            updateOffsetsDisplay(parsedData.offsets);
            updateDecryptsDisplay(decryptsData);
            updateLastUpdateTime();
            
            // Update version if available
            if (parsedData.version) {
                updateGameVersionDisplay(parsedData.version);
            }
            
            showUpdateNotification('Offsets and decrypts loaded successfully!');
            
            if (fileDot) {
                fileDot.className = 'file-dot loaded';
            }
            
            // Store in localStorage for caching
            localStorage.setItem('rustOffsets', JSON.stringify({
                data: parsedData.offsets,
                decrypts: decryptsData,
                version: parsedData.version,
                timestamp: Date.now()
            }));
        } else {
            if (fileDot) {
                fileDot.className = 'file-dot error';
            }
            showUpdateNotification('Could not parse offsets data');
        }
    } catch (error) {
        console.error('Error loading offsets:', error);
        if (fileDot) {
            fileDot.className = 'file-dot error';
        }
        showUpdateNotification('Error loading offsets: ' + error.message);
    }
}

// Load cached offsets if needed
function loadCachedOffsets() {
    const cached = localStorage.getItem('rustOffsets');
    if (cached) {
        try {
            const { data, decrypts, version, timestamp } = JSON.parse(cached);
            const age = Date.now() - timestamp;
            
            // Use cached data if less than 1 hour old
            if (age < 3600000) {
                updateOffsetsDisplay(data);
                if (decrypts) {
                    updateDecryptsDisplay(decrypts);
                }
                if (version) {
                    updateGameVersionDisplay(version);
                }
                return true;
            }
        } catch (error) {
            console.error('Error parsing cached offsets:', error);
        }
    }
    
    // If no valid cache, load embedded data
    const parsedData = parseEmbeddedOffsets();
    const decryptsData = parseDecryptFunctions();
    
    if (parsedData && parsedData.offsets) {
        updateOffsetsDisplay(parsedData.offsets);
        updateDecryptsDisplay(decryptsData);
        if (parsedData.version) {
            updateGameVersionDisplay(parsedData.version);
        }
        return true;
    }
    
    return false;
}

// Update game version in the UI
function updateGameVersionDisplay(version) {
    const gameVersionElement = document.getElementById('game-version');
    const heroVersionElement = document.getElementById('hero-version');
    
    if (gameVersionElement) {
        gameVersionElement.textContent = version;
    }
    
    if (heroVersionElement) {
        heroVersionElement.textContent = `v${version}`;
    }
    
    // Update page title with version
    document.title = `Rust Offsets v${version} - Always Updated`;
}

// Check for game updates periodically
async function checkForGameUpdates() {
    let currentVersion = null;
    
    // Add loading animation
    const loadingElements = ['last-update', 'game-version', 'hero-version'];
    loadingElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('loading');
        }
    });
    
    const checkVersion = async () => {
        try {
            // Load offsets from embedded data
            await loadOffsetsFromFile();
            
            // Remove loading animation
            loadingElements.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.remove('loading');
                }
            });
            
        } catch (error) {
            console.log('Version check failed:', error);
            
            // Remove loading animation even on error
            loadingElements.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.classList.remove('loading');
                    if (element.textContent === 'Loading...') {
                        element.textContent = 'Error';
                    }
                }
            });
        }
    };
    
    // Initial check
    await checkVersion();
}

// Immediate offset update simulation
function simulateOffsetUpdatesImmediate() {
    const offsetValues = document.querySelectorAll('.offset-value');
    
    offsetValues.forEach((element, index) => {
        setTimeout(() => {
            const randomHex = '0x' + Math.floor(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase().padStart(8, '0');
            
            element.style.background = 'var(--primary-white)';
            element.style.color = 'var(--primary-black)';
            element.style.transform = 'scale(1.02)';
            
            setTimeout(() => {
                element.textContent = randomHex;
                element.style.background = 'var(--primary-black)';
                element.style.color = 'var(--primary-white)';
                element.style.transform = 'scale(1)';
            }, 300);
        }, index * 100);
    });
    
    updateLastUpdateTime();
}

// Simulate real-time updates
function simulateOffsetUpdates() {
    const offsetValues = document.querySelectorAll('.offset-value');
    
    setInterval(() => {
        // Randomly update one offset value
        const randomIndex = Math.floor(Math.random() * offsetValues.length);
        const element = offsetValues[randomIndex];
        
        // Generate a random hex value
        const randomHex = '0x' + Math.floor(Math.random() * 0xFFFFFFFF).toString(16).toUpperCase().padStart(8, '0');
        
        // Add update animation
        element.style.background = 'var(--primary-white)';
        element.style.color = 'var(--primary-black)';
        element.style.transform = 'scale(1.02)';
        
        setTimeout(() => {
            element.textContent = randomHex;
            element.style.background = 'var(--primary-black)';
            element.style.color = 'var(--primary-white)';
            element.style.transform = 'scale(1)';
            updateLastUpdateTime();
        }, 500);
        
    }, 45000); // Update every 45 seconds
}

// Status monitoring
function monitorStatus() {
    const statusDot = document.querySelector('.status-dot');
    const statusText = statusDot?.parentElement.querySelector('span:last-child');
    
    setInterval(() => {
        // Simulate connection check (95% uptime)
        const isOnline = Math.random() > 0.05;
        
        if (statusDot && statusText) {
            if (isOnline) {
                statusDot.style.background = 'var(--primary-white)';
                statusText.textContent = 'ONLINE';
            } else {
                statusDot.style.background = '#666666';
                statusText.textContent = 'CHECKING...';
                
                // Auto-recover after 3 seconds
                setTimeout(() => {
                    statusDot.style.background = 'var(--primary-white)';
                    statusText.textContent = 'ONLINE';
                }, 3000);
            }
        }
    }, 15000); // Check every 15 seconds
}

// Navbar scroll effect
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.borderBottom = '1px solid #333333';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.borderBottom = '1px solid #2a2a2a';
    }
    
    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Create floating background elements
function createFloatingElements() {
    const container = document.getElementById('floating-elements');
    if (!container) return;

    // Create floating dots
    for (let i = 0; i < 15; i++) {
        const dot = document.createElement('div');
        dot.className = 'floating-dot';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.animationDelay = Math.random() * 15 + 's';
        dot.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(dot);
    }

    // Create floating squares
    for (let i = 0; i < 8; i++) {
        const square = document.createElement('div');
        square.className = 'floating-square';
        square.style.left = Math.random() * 100 + '%';
        square.style.animationDelay = Math.random() * 20 + 's';
        square.style.animationDuration = (20 + Math.random() * 10) + 's';
        container.appendChild(square);
    }

    // Create floating lines
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'floating-line';
        line.style.top = Math.random() * 100 + '%';
        line.style.animationDelay = Math.random() * 25 + 's';
        line.style.animationDuration = (25 + Math.random() * 15) + 's';
        container.appendChild(line);
    }
}

// Mouse interaction with background
function initMouseInteraction() {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth;
        mouseY = e.clientY / window.innerHeight;
        
        // Move dot pattern based on mouse
        const dotPattern = document.querySelector('.dot-pattern');
        if (dotPattern) {
            dotPattern.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
        }
        
        // Move grid pattern in opposite direction
        const gridPattern = document.querySelector('.grid-pattern');
        if (gridPattern) {
            gridPattern.style.transform = `translate(${-mouseX * 5}px, ${-mouseY * 5}px)`;
        }
    });
}

// Parallax effect for background elements
function initBackgroundParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        const dotPattern = document.querySelector('.dot-pattern');
        const gridPattern = document.querySelector('.grid-pattern');
        
        if (dotPattern) {
            dotPattern.style.transform = `translateY(${rate * 0.3}px)`;
        }
        
        if (gridPattern) {
            gridPattern.style.transform = `translateY(${rate * 0.1}px)`;
        }
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const titleLines = document.querySelectorAll('.title-line');
    
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';
        
        setTimeout(() => {
            let i = 0;
            const typeInterval = setInterval(() => {
                line.textContent += text[i];
                i++;
                if (i >= text.length) {
                    clearInterval(typeInterval);
                }
            }, 100);
        }, index * 800);
    });
}

// Add glitch effect to logo on hover
function initGlitchEffect() {
    const logo = document.querySelector('.logo');
    
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        logo.addEventListener('animationend', () => {
            logo.style.animation = '';
        });
    }
}

// Add CSS for glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
    
    .nav-menu.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.98);
        flex-direction: column;
        padding: 2rem;
        border-top: 1px solid var(--border-gray);
        gap: 1rem;
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(glitchStyle);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for quick search (placeholder)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Quick search activated');
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        navMenu?.classList.remove('active');
        navToggle?.classList.remove('active');
    }
});

// Update notification system
function showUpdateNotification(message = 'New offsets available!') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: var(--primary-white);
        color: var(--primary-black);
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
        font-size: 0.9rem;
        border: 1px solid var(--border-gray);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create animated background elements
    createFloatingElements();
    
    // Initialize interactions
    initMouseInteraction();
    initBackgroundParallax();
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.offset-category, .timeline-item, .contact-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize all functions
    updateLastUpdateTime();
    simulateOffsetUpdates();
    monitorStatus();
    initGlitchEffect();
    
    // Initialize game version fetching and offset loading
    checkForGameUpdates();
    
    // Add refresh button functionality
    const refreshBtn = document.getElementById('refresh-offsets');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', async () => {
            refreshBtn.classList.add('loading');
            refreshBtn.disabled = true;
            
            try {
                await loadOffsetsFromFile();
                showUpdateNotification('Offsets and decrypts refreshed!');
            } catch (error) {
                showUpdateNotification('Error refreshing data');
                console.error('Refresh error:', error);
            } finally {
                refreshBtn.classList.remove('loading');
                refreshBtn.disabled = false;
            }
        });
    }
    
    // Add download button functionality
    const downloadBtn = document.getElementById('download-file');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            downloadFullFile();
        });
    }
    
    // Show welcome notification
    setTimeout(() => {
        showUpdateNotification('Welcome to Rust Offsets - Always Updated');
    }, 2000);
    
    // Add tooltips to offset values (will be added dynamically)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('offset-value')) {
            // Copy functionality is handled in updateOffsetsDisplay
        }
    });
});

// Performance optimization: throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations here
}, 16)); // ~60fps