# boilerplate-react-native

## Environment setup

1. Install [Android Studio](https://developer.android.com/studio) 
2. Install [JDK](https://www.oracle.com/ru/java/technologies/javase/javase-jdk8-downloads.html) 
3. Set environment variable
   1. ANDROID_HOME
   2. JAVA_HOME
   3. platform-tools
4. Open Android Studio > Sdk Manager > Sdk Tools
   1. Android SDK Command-line tools
   2. Google USB driver
   3. Intel x86 ...

## Phone setup 

1. Enable developer options
2. Enable USB debug
3. Enable USB install 

## Test environment setup

1. git clone https://github.com/steroids/boilerplate-react-native.git
2. cd boilerplate-react-native
3. yarn
4. yarn clean
5. adb devices
6. adb -s <device name> reverse tcp:8081 tcp:8081
7. yarn android

## Splash screen

### Android 

1. Open Android Studio
2. Open folder android in project
3. Right-click on the folder res
4. New Assets
5. Name 'ic_launcher'

### iOS

1. Open XCode
2. Open folder ios in project
3. Images > AppIcon change
