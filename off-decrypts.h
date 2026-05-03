// rust dumper made by martin
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

