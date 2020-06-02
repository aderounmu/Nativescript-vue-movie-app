<template>
    <Page actionBarHidden="true" @loaded="pageLoaded">
        <AbsoluteLayout width="100%" height="100%"
            backgroundColor="lightgray">
            <!--Image Overlay-->
            <StackLayout orientation="vertical" width="100%" height="100%"
                backgroundColor="black" id="overlay1">
                <StackLayout orientation="vertical" width="100%" height="80%"
                    id="image-cont">
                    <Image src="~/assets/maleficent.jpg" stretch="aspectFill"
                        iosOverflowSafeArea="true" />
                </StackLayout>
            </StackLayout>
            <!-- Details Overlay-->
            <StackLayout orientation="vertical" width="100%" height="100%"
                backgroundColor="black" ref="detailsOverlay"
                id="detailsOverlay" class="overlay" @loaded="loadscroll">
                <StackLayout class="tab-control-container"
                    @tap="expandDetail">
                    <StackLayout class="tab-control">
                    </StackLayout>
                </StackLayout>
                <Details marginBottom="150" @androidscroll="andscroll"
                    ref="detailsContent"
                    android:style="border-radius: 30 30 0 0" class="clip" />
            </StackLayout>
            <!--Time Overlay-->
            <StackLayout orientation="vertical" width="100%" height="100%"
                backgroundColor="black" ref="decorTimeOverlay"
                id="decorTimeOverlay" class="overlay decorOverlay">
                <StackLayout orientation="vertical"
                    class="decor-text-container">
                    <Label text="Maleficent: Mistress of Evil"
                        class="decor-text decor-text1" />
                    <Label text="2019 Fantasy/Action 1h 58m"
                        class="decor-text decor-text2" />
                </StackLayout>
            </StackLayout>
            <StackLayout orientation="vertical" width="100%" height="100%"
                ref="timeOverlay" id="timeOverlay"
                class="overlay time-overlay">
                <Time width="100%" height="100%" verticalAlignment="top" />
            </StackLayout>
            <!--topicons-->
            <StackLayout orientation="vertical" width="100%" top="0"
                class="topIconsConatainer">
                <GridLayout columns="auto, *, auto, auto">
                    <Image @tap="changeToDetail" col="0"
                        src="~/assets/Back_Button.png" width="36"
                        height="36" />
                    <Image col="2" src="~/assets/share.png" width="24"
                        height="24" marginRight="10" />
                    <Image col="3" src="~/assets/favorite.png" width="24"
                        height="24" />
                </GridLayout>
            </StackLayout>
            <!---Buttons-->
            <Button text="BUY A TICKET" @tap="changeToTime" ref="actionBtn1"
                id="actionBtn1" class="buttons" left="20" />
            <Button text="RESERVE SEAT" ref="actionBtn2" id="actionBtn2"
                :class="[isDetails ? 'no_show' : 'show' ]" class="buttons"
                left="20" />
        </AbsoluteLayout>
    </Page>
</template>

<script>
    import Details from "../components/Modules/Details.page/Details";
    import Time from "../components/Modules/Time.page/Time";
    import Home from "../components/Modules/Home.page/Home";
    const platform = require("tns-core-modules/platform");
    import {
        screen
    } from "tns-core-modules/platform";
    var enums = require("tns-core-modules/ui/enums");
    const Page = require("tns-core-modules/ui/page");
    var gestures = require("tns-core-modules/ui/gestures");
    export default {
        components: {
            Details,
            Time
        },
        data() {
            return {
                isDetails: true,
                detailsExpand: false
            };
        },
        methods: {
            //change to time page
            changeToTime() {
                this.isDetails = false;
                let detailoverlay = this.$refs.detailsOverlay.nativeView;
                let timeoverlay = this.$refs.timeOverlay.nativeView;
                let button1 = this.$refs.actionBtn1.nativeView;
                let button2 = this.$refs.actionBtn2.nativeView;
                let decoroverlay = this.$refs.decorTimeOverlay.nativeView;
                console.log(screen.mainScreen.heightDIPs);
                //for small width
                if (screen.mainScreen.heightDIPs <= 700) {
                    detailoverlay.animate({
                        duration: 800,
                        translate: {
                            x: 0,
                            y: screen.mainScreen.heightDIPs
                        },
                        opacity: 0,
                        curve: enums.AnimationCurve.easeOut
                    });
                    decoroverlay.animate({
                        duration: 800,
                        translate: {
                            x: 0,
                            y: 80
                        },
                        opacity: 1,
                        curve: enums.AnimationCurve.easeOut
                    });
                    timeoverlay.animate({
                        duration: 800,
                        translate: {
                            x: 0,
                            y: 145
                        },
                        opacity: 1,
                        curve: enums.AnimationCurve.easeOut
                    });
                }
                //for large widths
                if (screen.mainScreen.heightDIPs > 700) {
                    if (platform.isIOS) {
                        detailoverlay.animate({
                            duration: 800,
                            translate: {
                                x: 0,
                                y: screen.mainScreen.heightDIPs
                            },
                            opacity: 0,
                            curve: enums.AnimationCurve.easeOut
                        });
                        decoroverlay.animate({
                            duration: 800,
                            translate: {
                                x: 0,
                                y: 127
                            },
                            opacity: 1,
                            curve: enums.AnimationCurve.easeOut
                        });
                        timeoverlay.animate({
                            duration: 800,
                            translate: {
                                x: 0,
                                y: 213
                            },
                            opacity: 1,
                            curve: enums.AnimationCurve.easeOut
                        });
                    } else {
                        detailoverlay.animate({
                            duration: 800,
                            translate: {
                                x: 0,
                                y: screen.mainScreen.heightDIPs
                            },
                            opacity: 0,
                            curve: enums.AnimationCurve.easeOut
                        });
                        decoroverlay.animate({
                            duration: 800,
                            translate: {
                                x: 0,
                                y: 65
                            },
                            opacity: 1,
                            curve: enums.AnimationCurve.easeOut
                        });
                        timeoverlay.animate({
                            duration: 800,
                            translate: {
                                x: 0,
                                y: 130
                            },
                            opacity: 1,
                            curve: enums.AnimationCurve.easeOut
                        });
                    }
                }
                button2.animate({
                    duration: 800,
                    opacity: 1,
                    curve: enums.AnimationCurve.easeOut
                });
                button1.animate({
                    duration: 800,
                    opacity: 0,
                    curve: enums.AnimationCurve.easeOut
                });
            },
            //change to detail page
            changeToDetail() {
                if (this.isDetails == false) {
                    this.isDetails = true;
                    let detailoverlay = this.$refs.detailsOverlay.nativeView;
                    let timeoverlay = this.$refs.timeOverlay.nativeView;
                    let button1 = this.$refs.actionBtn1.nativeView;
                    let button2 = this.$refs.actionBtn2.nativeView;
                    let decoroverlay = this.$refs.decorTimeOverlay.nativeView;
                    detailoverlay.animate({
                        duration: 800,
                        translate: {
                            x: 0,
                            y: screen.mainScreen.heightDIPs * 0.5
                        },
                        opacity: 1,
                        curve: enums.AnimationCurve.easeOut
                    });
                    decoroverlay.animate({
                        duration: 800,
                        translate: {
                            x: 0,
                            y: screen.mainScreen.heightDIPs
                        },
                        opacity: 0,
                        curve: enums.AnimationCurve.easeOut
                    });
                    timeoverlay.animate({
                        duration: 800,
                        translate: {
                            x: 0,
                            y: screen.mainScreen.heightDIPs
                        },
                        opacity: 0,
                        curve: enums.AnimationCurve.easeOut
                    });
                    button1.animate({
                        duration: 800,
                        opacity: 1,
                        curve: enums.AnimationCurve.easeOut
                    });
                    button2.animate({
                        duration: 800,
                        opacity: 0,
                        curve: enums.AnimationCurve.easeOut
                    });
                } else {
                    //navigate back to homepage
                    console.log("navigate back to home page");
                    this.$navigateTo(Home, {
                        clearHistory: true,
                        transition: {
                            name: "fade",
                            duration: 800,
                            curve: "easeIn"
                        }
                    });
                }
            },
            //when page is loaded
            pageLoaded() {
                let detailoverlay = this.$refs.detailsOverlay.nativeView;
                let timeoverlay = this.$refs.timeOverlay.nativeView;
                let button1 = this.$refs.actionBtn1.nativeView;
                let button2 = this.$refs.actionBtn2.nativeView;
                let decoroverlay = this.$refs.decorTimeOverlay.nativeView;
                //specicifications for ios
                if (platform.isIOS) {
                    detailoverlay.translateY = screen.mainScreen.heightDIPs *
                        0.5;
                    //stay open when you leave app
                    if (this.isDetails) {
                        decoroverlay.translateY = screen.mainScreen
                        .heightDIPs;
                        timeoverlay.translateY = screen.mainScreen.heightDIPs;
                        decoroverlay.opacity = 0;
                        timeoverlay.opacity = 0;
                        button2.opacity = 0;
                    } else {
                        if (screen.mainScreen.heightDIPs > 700) {
                            if (platform.isIOS) {
                                decoroverlay.translateY = 127;
                                timeoverlay.translateY = 213;
                            } else {
                                decoroverlay.translateY = 80;
                                timeoverlay.translateY = 145;
                            }
                        } else {
                            decoroverlay.translateY = 80;
                            timeoverlay.translateY = 145;
                        }

                        decoroverlay.opacity = 1;
                        timeoverlay.opacity = 1;
                        button2.opacity = 1;
                    }
                    if (screen.mainScreen.heightDIPs > 700) {
                        button1.translateY = screen.mainScreen.heightDIPs -
                            120;
                        button2.translateY = screen.mainScreen.heightDIPs -
                            120;
                    } else {
                        button1.translateY = screen.mainScreen.heightDIPs -
                        90;
                        button2.translateY = screen.mainScreen.heightDIPs -
                        90;
                    }
                } else {
                    //specification for android
                    detailoverlay.translateY = screen.mainScreen.heightDIPs *
                        0.5;
                    //stay open when you leave app
                    if (this.isDetails) {
                        decoroverlay.translateY = screen.mainScreen
                        .heightDIPs;
                        timeoverlay.translateY = screen.mainScreen.heightDIPs;
                        decoroverlay.opacity = 0;
                        timeoverlay.opacity = 0;
                        button2.opacity = 0;
                    } else {
                        decoroverlay.translateY = 65;
                        timeoverlay.translateY = 130;
                        decoroverlay.opacity = 1;
                        timeoverlay.opacity = 1;
                        button2.opacity = 1;
                    }
                    button1.translateY = screen.mainScreen.heightDIPs - 120;
                    button2.translateY = screen.mainScreen.heightDIPs - 120;
                }
            },

            loadscroll(args) {
                var item = args.object;
                if (platform.isIOS) {
                    item.on(gestures.GestureTypes.swipe, function(args) {
                        console.log(args.direction);
                        if (args.direction == 4) {
                            item.animate({
                                duration: 600,
                                translate: {
                                    x: 0,
                                    y: 130
                                },
                                opacity: 1,
                                curve: enums.AnimationCurve
                                    .easeOut
                            });
                        }
                    });
                    this.detailsExpand = true;
                }
            },
            andscroll() {
                if (platform.isAndroid) {
                    let detailoverlay = this.$refs.detailsOverlay.nativeView;
                    let details = this.$refs.detailsContent.nativeView;
                    details.on(gestures.GestureTypes.swipe, function(args) {
                        console.log(args.direction);
                        if (args.direction == 4) {
                            detailoverlay.animate({
                                duration: 600,
                                translate: {
                                    x: 0,
                                    y: 130
                                },
                                opacity: 1,
                                curve: enums.AnimationCurve
                                    .easeOut
                            });
                        }
                    });
                    this.detailsExpand = true;
                }
            },
            expandDetail() {
                let detailoverlay = this.$refs.detailsOverlay.nativeView;
                if (this.detailsExpand) {
                    detailoverlay.animate({
                        duration: 600,
                        translate: {
                            x: 0,
                            y: screen.mainScreen.heightDIPs * 0.5
                        },
                        opacity: 1,
                        curve: enums.AnimationCurve.easeOut
                    });
                    console.log("notexpanded");
                    console.log(this.detailsExpand);
                    this.detailsExpand = false;
                } else {
                    detailoverlay.animate({
                        duration: 600,
                        translate: {
                            x: 0,
                            y: 130
                        },
                        opacity: 1,
                        curve: enums.AnimationCurve.easeOut
                    });
                    console.log("expanded");
                    this.detailsExpand = true;
                }
            }
        }
    };
</script>

<style scoped>
    .overlay {
        border-radius: 30 30 0 0
    }

    .no_show {
        visibility: collapsed
    }

    .show {
        visibility: visible
    }

    .buttons {
        width: 82%;
        height: 45;
        border-radius: 10;
        background: linear-gradient(to left, #FF4936, #BB1A34);
        color: white
    }

    .topIconsConatainer {
        padding: 10 25
    }

    .decorOverlay {
        background: url('~/assets/Rectangle_59.png');
        padding: 0;
    }

    .decor-text {
        color: white;
    }

    .decor-text-container {
        margin: 0 30;

    }

    .decor-text1 {
        font-size: 18
    }

    .decor-text2 {
        font-size: 10
    }

    .time-overlay {
        background: linear-gradient(to bottom, #A41C30, #3B0A11, #000000)
    }

    .tab-control {
        width: 45;
        height: 4;
        border-radius: 10;
        background-color: white;
        vertical-align: center;
        margin: 8
    }

    .tab-control-container {
        height: 20;
        width: 90;
    }
</style>