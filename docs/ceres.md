# Ceres

## References

- [React Native's getting started](https://reactnative.dev/docs/getting-started)

- [Rocketseat's guide](https://react-native.rocketseat.dev/)

<br/>

## Installing dependencies

You need to install:

- [JDK/OpenJDK 8](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html)

- [Android SDK in the Command Tools Line section](https://developer.android.com/studio/#downloads)

<br/>

### JDK/OpenJDK8

Tou can do it using oracle's website or the following commands

```
sudo apt-get install openjdk-8-jre
```

```
sudo apt install openjdk-8-jdk
```

[if you're using macOS, follow this guide for openjdk8](https://adoptopenjdk.net/installation.html#x64_mac-jdk)

<br/>

### Android Command Line Tools

1. Extract the files you downloaded in android sdk command line tools in your home

2. Add the following lines to your .bashrc, .bash_profile or .zshrc file

`export ANDROID_HOME=[endereçodasuapastadoandroidsdk]`

(ex: export ANDROID_HOME=\$HOME/softwares/android_sdk)

```
export PATH=$PATH:$ANDROID_HOME/emulator
```

```
export PATH=$PATH:$ANDROID_HOME/tools
```

```
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

```
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

3. Close and open your terminal again. Run
   `sdkmanager --sdk_root=${ANDROID_HOME} "platform-tools" "platforms;android-28"`

<br/>

## Troubleshooting

If your Java version is different than 8, run `sudo update-alternatives --config java` and choose version 8 after installing it.

If you already have Nodis app installed on your phone from the Play Store, uninstall it before running the project on it.

<br/>

## Running the project on your PC

If you don't want to/can't use an emulator, plug your android phone with an USB cable and activate it's android developer tools

Run `yarn android` and press y to accept Android's license. Your phone will ask you if you want to install an app via USB - confirm it.
Run `yarn start` to start the app server.

We won't be explaining how to run the app on an iPhone because we currently don't have one :(

---

[< Go back](https://nodis-com-br.github.io/math/)
