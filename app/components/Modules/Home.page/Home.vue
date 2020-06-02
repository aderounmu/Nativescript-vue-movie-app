<template>
    <Page actionBarHidden="true" @loaded="pageloaded">
        <GridLayout rows="*,auto,auto">
            <ScrollView orientation="vertical" row="0">
                <GridLayout rows="*,auto">
                    <!--Top Decorations-->
                    <!--ForegroundBackground-->
                    <Image iosOverflowSafeArea="true" rowSpan="2"
                        class="background1" stretch="aspectFill"
                        src="~/assets/homeBackground1.jpg" row="1" />
                    <!--Top page Design-->
                    <StackLayout orientation="vertical"
                        verticalAlignment="top" row="1" rowSpan="5"
                        class="background2">
                        <StackLayout orientation="vertical"
                            verticalAlignment="top" class="background3">
                        </StackLayout>
                    </StackLayout>
                    <!--content-->
                    <StackLayout orientation="vertical" row="1">
                        <!--header-->
                        <GridLayout columns="auto,*,auto" margin="10 20">
                            <StackLayout orientation="vertical" col="0">
                                <Label class="header-text1"
                                    text="Welcome Darrell" />
                                <Label class="header-text2"
                                    text="Filmhouse, Surulere" />
                            </StackLayout>
                            <Image width="50" col="2"
                                src="~/assets/user_image.png" />
                        </GridLayout>
                        <!-- what is hot -->
                        <GridLayout row="2" rows="auto , auto">
                            <!--header-->
                            <GridLayout columns="auto,*, auto"
                                class="section-header">
                                <GridLayout orientation="horizontal" col="0"
                                    columns="auto,auto">
                                    <label class="header" text="What is Hot"
                                        col="0" />
                                    <Image src="~/assets/Emoji.png" width="27"
                                        height="25" col="1" />
                                </GridLayout>
                                <label class="viewall" col="2"
                                    text="View all" />
                            </GridLayout>
                            <!--content-->
                            <ScrollView class="section"
                                orientation="horizontal" row="1">
                                <StackLayout orientation="horizontal">
                                    <HotCard width="237" height="200"
                                        v-for="item in movieCombo"
                                        :Title="item.title"
                                        :imageSource="item.image"
                                        :onFocus="true" class="HotCard" />
                                </StackLayout>
                            </ScrollView>
                        </GridLayout>
                        <!--Now showing -->
                        <GridLayout row="2" rows="auto , auto">
                            <!--header-->
                            <GridLayout columns="auto,*, auto, auto" class="">
                                <StackLayout orientation="horizontal" col="0"
                                    verticalAlignment="middle">
                                    <label class="header"
                                        text="Now Showing" />
                                </StackLayout>
                                <!--<TextView class="BigNowShowing" col="0"
                                    colSpan="4" editable="false">
                                    <FormattedString>
                                        <Span text="Now Showing" />
                                    </FormattedString>
                                </TextView>-->
                                <label iosOverflowSafeArea="true"
                                    text="Now Showing" class="BigNowShowing"
                                    col="0" colSpan="4" whiteSpace="initial"
                                    ref="bigNowShowing" ios:style="height: 60" />
                                <label col="2" text="View all" class="viewall"
                                    verticalAlignment="middle" />
                            </GridLayout>
                            <!--content-->
                            <ScrollView class="section"
                                orientation="horizontal" row="1">
                                <StackLayout orientation="horizontal">
                                    <NowShowingCard width="127"
                                        v-for="item in nowShowing"
                                        :Title="item.title"
                                        :imageSource="item.image"
                                        :inCinema="true" :Rating="item.star"
                                        class="HotCard"
                                        @navigatedetails="navigateToDetail" />
                                </StackLayout>
                            </ScrollView>
                        </GridLayout>
                        <!--Coming Soon -->
                        <GridLayout row="2" rows="auto , auto">
                            <!--header-->
                            <GridLayout columns="auto,*, auto"
                                class="section-header">
                                <StackLayout orientation="horizontal" col="0">
                                    <label class="header"
                                        text="Coming Soon" />
                                </StackLayout>
                                <label col="2" text="View all"
                                    class="viewall" />
                            </GridLayout>
                            <!--content-->
                            <ScrollView orientation="horizontal" row="1">
                                <StackLayout orientation="horizontal">
                                    <NowShowingCard width="92"
                                        v-for="item in comingSoon "
                                        :Title="item.title"
                                        :imageSource="item.image"
                                        :inCinema="false" class="inCinema" />
                                </StackLayout>
                            </ScrollView>
                        </GridLayout>
                    </StackLayout>
                </GridLayout>
            </ScrollView>
            <!--homepage Bottom navigation-->
            <GridLayout row="1" columns="auto, * , auto ,* auto , * , auto "
                height="60" dock="bottom" class="menu">
                <Image src="~/assets/icons/icon-home.png" col="0" width="26"
                    height="26" />
                <Image src="~/assets/icons/icon-search.png" col="2" width="26"
                    height="26" />
                <Image src="~/assets/icons/icon-tickets.png" col="4"
                    width="26" height="26" />
                <Image src="~/assets/icons/icon-bookmarks.png" col="6"
                    width="26" height="26" />
            </GridLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import page2 from "~/components/page2";
    import HotCard from "./components/HotCard";
    import NowShowingCard from "./components/NowShowingCard";
    const platform = require("tns-core-modules/platform");
    export default {
        components: {
            HotCard,
            NowShowingCard
        },
        data() {
            return {
                movieCombo: [{
                        title: " Maleficent Mistress of Evil and Gemini Man Combo",
                        image: "~/assets/BannerCreated/banner1.jpg"
                    },
                    {
                        title: "Combo",
                        image: "~/assets/BannerCreated/banner2.jpg"
                    },
                    {
                        title: " Maleficent Mistress of Evil and Gemini Man Combo",
                        image: "~/assets/BannerCreated/banner3.jpg"
                    }
                ],
                nowShowing: [{
                        title: " Maleficent: Mistress of Evil",
                        image: "~/assets/MoviePosters/InCinema/maleficent_mistress_of_evil_ver6_xlg.jpg",
                        star: 3
                    },
                    {
                        title: "Joker",
                        image: "~/assets/MoviePosters/InCinema/joker_ver2_xlg.jpg",
                        star: 4
                    },
                    {
                        title: "Zombieland: Double Tap",
                        image: "~/assets/MoviePosters/InCinema/zombieland_double_tap_xlg.jpg",
                        star: 3
                    },
                    {
                        title: " Gemini Man",
                        image: "~/assets/MoviePosters/InCinema/gemini_man_ver3_xlg.jpg",
                        star: 2
                    }
                ],
                comingSoon: [{
                        title: "Forzen 2",
                        image: "~/assets/MoviePosters/Upcoming/frozen_two_ver3_xlg.jpg"
                    },
                    {
                        title: " The Aeronauts ",
                        image: "~/assets/MoviePosters/Upcoming/aeronauts_ver5_xlg.jpg"
                    },
                    {
                        title: " 21 Bridges",
                        image: "~/assets/MoviePosters/Upcoming/twenty_one_bridges_xlg.jpg"
                    }
                ]
            };
        },
        methods: {
            pageloaded() {
                const big = this.$refs.bigNowShowing.nativeView;
                if (platform.isIOS) {
                    big.ios.lineBreakMode = NSLineBreakMode.ByClipping;
                } else {
                    big.android.setEllipsize(undefined);
                }
            },
            navigateToDetail() {
                console.log("navigate back to page2");
                this.$navigateTo(page2, {
                    clearHistory: true,
                    transition: {
                        name: "fade",
                        duration: 800,
                        curve: "easeIn"
                    }
                });
            }
        }
    };
</script>

<style scoped>
    Page {
        background-color: black
    }

    .background1 {
        opacity: 0.05;
    }

    .background2 {
        background: linear-gradient(to bottom, #A71D31, #000000);
        height: 150;
        //border-radius: 0 0 1000 1000;
        //background-image: url('~/assets/Rectangle_58.png')
    }

    .background3 {
        background-image: url('~/assets/Rectangle_58.png');
        height: 100%;
    }

    .menu {
        color: white;
        background-color: black;
        padding: 10 30
    }

    .HotCard {
        margin: 10;
    }

    .inCinema {
        margin: 0 20;
    }

    .header-text1 {
        font-size: 28;
        color: white;
        font-weight: bold
    }

    .header-text2 {
        font-size: 15;
        color: white
    }

    .section-header {
        margin: 0 10;
    }

    .section {
        margin: 0 10
    }

    .header {
        color: white;
        font-size: 20;
        margin: 5
    }

    .viewall {
        color: #FF4936;
        font-size: 20;
        margin: 5
    }

    .BigNowShowing {
        font-size: 68;
        color: #A71D31;
        opacity: 0.20;
        width: 200%;
        margin: 0, 0;
        font-fmaily: "Roboto-Medium";
        font-weight: medium;
    }
</style>