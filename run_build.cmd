@echo off
set "SystemRoot=C:\Windows"
set "SystemDrive=C:"
set "ComSpec=C:\Windows\system32\cmd.exe"
set "PATH=C:\Windows\System32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Program Files\nodejs\;C:\Users\gamer\Desktop\downloads\devkitPro\msys2\usr\bin"
set "HOME=C:\Users\gamer"
set "USERPROFILE=C:\Users\gamer"
set "LOCALAPPDATA=C:\Users\gamer\AppData\Local"
set "APPDATA=C:\Users\gamer\AppData\Roaming"
cd /d "%~dp0"
echo Starting EAS Build...
call npx.cmd eas build --platform android --profile development --non-interactive --no-wait
