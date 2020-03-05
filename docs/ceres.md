# Installing dependencies

React Native's website is a good reference - https://reactnative.dev/docs/getting-started
Rockseat's guide too - https://docs.rocketseat.dev/ambiente-react-native/android/linux

We won't be explaining how to run the app on an iPhone because we currently don't have one :(

You need to install:

- JDK/OpenJDK 8
  https://www.oracle.com/java/technologies/javase-jdk8-downloads.html

or

```
sudo apt-get install openjdk-8-jre
```

```
sudo apt install openjdk-8-jdk
```

- Android SDK (You can install Android Studio instead, but it's such a mess)
  https://developer.android.com/studio/#downloads

In the Command Tools Line section

1. Extract the files you downloaded in android sdk command line tools in your home

2. Configure the ANDROID_HOME environment variable opening your .bashrc, .bash_profile or .zshrc file

export ANDROID_HOME=[endereçodasuapastadoandroidsdk]
(ex: export ANDROID_HOME=\$HOME/softwares/android_sdk)

export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

3. Close and open your terminal again. Run `sdkmanager "platform-tools" "platforms;android-28"`

# Troubleshooting

If you aren't able to install android's versions and platform tools with sdkmanager, try `sdkmanager --sdk_root=${ANDROID_HOME} "platform-tools" "platforms;android-28"`

If your Java version is different than 8, run `sudo update-alternatives --config java` and choose version 8 after installing it.

If you already have Nodis app installed on your phone from the Play Store, uninstall it before running the project on it.

# Running the project on your pc

If you don't want to/can't use an emulator, plug your android phone with an USB cable and activate it's android developer tools

Run `yarn start` and then `yarn android` - your phone will ask you if you want to install an app via USB - confirm it.

[< Go back](https://nodis-com-br.github.io/math/)
