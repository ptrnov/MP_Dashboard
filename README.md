# Dashboard MProject
````
ver 1.0.0
1. All Dashboard ts & Dom
2. add css font/icon awesome : add file: config.js  
3. add component table: @swimlane/ngx-datatable     : #npm i @swimlane/ngx-datatable --save
4. add sqlite native                                : #npm install --save @ionic-native/sqlite
6. Splash config.xml
    <preference name="AutoHideSplashScreen" value="false" />
    <preference name="SplashScreenDelay" value="10000" />
    <preference name="FadeSplashScreenDuration" value="1000" />
    <preference name="SplashScreen" value="screen" />
    <preference name="ShowSplashScreen" value="true" />
    <preference name="ShowSplashScreenSpinner" value="false" />
    <preference name="SplashShowOnlyFirstTime" value="false" />
    <preference name="FadeSplashScreen" value="true" />
    <feature name="StatusBar">
        <param name="ios-package" onload="true" value="CDVStatusBar" />
    </feature>
    <preference name="SplashShowOnlyFirstTime" value="false" />
7. Install Toast
    # ionic cordova plugin add cordova-plugin-x-toast
    # npm install --save @ionic-native/toast
8. tslint
   #npm install -g tslint
9. SqiIte Sync Api
   On Forlder Provider
10. Screen Orantion
    add in config.xml : <preference name="orientation" value="portrait" />
11. Searcable
    #npm install ionic-select-searchable --save 
    reff: https://www.npmjs.com/package/ionic-select-searchable
12. add install 
    #npm install ngx-toastr --save
    #issue : __WEBPACK_IMPORTED_MODULE_0__angular_core__.OpaqueToken is not a constructor 
13. issue: application error the connection to the server was unsuccessful file:///android_asset/www/index.html)
    soluation add in config.eml
    <preference name="loadUrlTimeoutValue" value="700000" />
14. Release APK
#keytool -genkey -v -keystore codo.dashboard.keystore -alias codo.dashboard -keyalg RSA -keysize 2048 -validity 10000
pass: Sp1d3rm4n4
first * last name : piter novian
organizational: programmer
organizational name: cudo
City: tangerang
provincy: banten
cunty code : 62

ionic cordova build android --release --prod
	

#jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore codo.dashboard.keystore E:/ionicProject/MP_Dashboard/MP_Dashboard/platforms/android/build/outputs/apk/release/android-release-unsigned.apk codo.dashboard

to playstore
#zipalign -v -p 4 android-release-unsigned.apk newdemoapp.apk
Other
ionic cordova build android --minifycss --optimizejs --minifyjs --release
````
