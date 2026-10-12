# Korra Emulator for Android

Korra Emulator is an Android game launcher and emulator frontend. It scans games selected through Android's file picker and launches supported games in their matching Android engine.

The app UI and launcher are built with Kotlin and Jetpack Compose. Libretro cores run through a native C++ frontend connected with JNI. This project currently targets Android only.

## Features

- Scan a selected game folder or import a game with Android's system file picker.
- Detect supported Libretro systems from game file extensions.
- Download a mapped Libretro core when it is not installed.
- Use on-screen and device input controls, audio, and save states.
- Copy document-provider ROMs into app cache before loading them into a core.
- Share the runtime log from the game library screen using **Share log**.
- Includes separate handlers for some Ren'Py and RPG Maker game formats.

## Configured Libretro systems

| System | Extensions | Core |
| --- | --- | --- |
| NES | `.nes` | FCEUmm |
| SNES | `.sfc`, `.smc` | Snes9x |
| Game Boy Advance | `.gba` | mGBA |
| Game Boy / Game Boy Color | `.gb`, `.gbc` | Gambatte |
| Nintendo 64 | `.n64`, `.z64` | Mupen64Plus |
| PlayStation | `.iso`, `.bin`, `.cue`, `.pbp` | PCSX ReARMed |
| PlayStation Portable | `.iso`, `.cso` | PPSSPP |
| Sega Genesis | `.md`, `.gen`, `.smd` | Genesis Plus GX |
| Arcade | `.zip`, `.7z` | FBNeo |
| Nintendo DS | `.nds` | melonDS |
| Nintendo 3DS | `.3ds` | Citra |
| PC Engine | `.pce` | Beetle PCE Fast |
| WonderSwan | `.ws`, `.wsc` | Beetle Cygne |
| Atari Lynx | `.lnx` | Handy |
| Neo Geo Pocket | `.ngp`, `.ngc` | Mednafen NGP |
quick update: thiss is first beta only gba and nds forks for sure exe or rpg dosent ork for no an i int teste besie gba and nds and nds works only on landscahpe mode so if you try other type of games an do not work report it in my discord server here is the link : https://discord.gg/EbAEvzZ2j7
These are configured system mappings; compatibility can vary by game, core, and device. An internet connection may be needed to download a core the first time it is used. Use legally obtained game files and any system firmware required by the selected core.

## Install and use

1. Install the Korra Android APK.
2. Open the app and tap **+** to select a game folder or import a game.
3. Choose a game from the library to launch it.
