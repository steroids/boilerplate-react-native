# React Native Boilerplate

# Развертывание нового приложения на React Native

## 1. Скопировать в отдельную папку всё содержимое, кроме папки .git

## 2. [Развернуть окружения для React Native](https://docs.google.com/document/d/1h_rl1642YX-rO-rgERlZWjpuypck7hY5ncCUTtmchPo/edit?usp=sharing)

## 3. Заменить applicationId в файле android/app/build.gradle

## 4. Заменить Bundle identifier открыв проект в XCode через файл ios/mobile.workspace

## 5. Добавить проект в новый репозиторий

## 6. Удалить раздел "Развертывание нового приложения на React Native" из этого README.md

## Install

### 1. Install dependencies

```shell
yarn

yarn pod (только для mac os)
```

### 2. Configure local workplace via `.env`

## Start

### Android

```shell
yarn android
```

### iOS через XCode выбрав эмулятор устройства на котором запускать

## Clear cache

### Bundler

```shell
yarn clear
```

### Android

```shell
yarn clean
```

## Build

### Setup build for Android

1. Generate keystore

```shell
keytool -genkeypair -v -storetype PKCS12 -keystore {project}-upload-key.keystore -alias {project}-key-alias -keyalg RSA -keysize 2048 -validity 10000

```

2. Place the {project}-upload-key.keystore file under the android/app

3. Edit the file android/gradle.properties

```
MYAPP_UPLOAD_STORE_FILE={project}-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS={project}-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

4. Edit the file android/app/build.gradle

```
signingConfigs {
    release {
        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
            storeFile file(MYAPP_UPLOAD_STORE_FILE)
            storePassword MYAPP_UPLOAD_STORE_PASSWORD
            keyAlias MYAPP_UPLOAD_KEY_ALIAS
            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
        }
    }
}
buildTypes {
    release {
        ...
        signingConfig signingConfigs.release
    }
}
```

### APK

```shell
yarn apk
```

### AAB

```shell
yarn aab
```

### iOS

1. Open XCode ios/mobile.workspace
2. Make sure to set the device to "Any iOS Device (arm64)"
3. Product -> Archive
4. Click button "next"
5. Click "Distribution"
