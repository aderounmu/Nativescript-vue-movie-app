<template>
    <ScrollView orientation="vertical"class="Page" @loaded="$emit('androidscroll')">
        <StackLayout orientation="vertical">
            <!--Title-->
            <label :text="Title" class="main-title" />
            <!--Detail-->
            <Label :text="Details" class="main-details" />
            <!-- star -->
            <StackLayout orientation="horizontal" class="section-alt">
                <Image v-for="n in rating" class="star"
                    src="~/assets/Star1.png" />
                <Image v-for="n in darkstar" class="star"
                    src="~/assets/Star2.png" />
            </StackLayout>
            <!-- Time-->
            <StackLayout orientation="horizontal" class="section-alt">
                <StackLayout v-for="time in Times" class="time">
                    <Label :text="time" />
                </StackLayout>
            </StackLayout>
            <!--Synopsis-->
            <StackLayout orientation="vertical"
                class="section synopsis-section">
                <!--title-->
                <label class="section-title" text="Synopsis" />
                <!--content-->
                <label :text="Synopsis" class="synopsis-txt" />
            </StackLayout>
            <!--Trailers-->
            <GridLayout rows="auto, auto" class="scroll-hon">
                <!--header-->
                <GridLayout columns="auto,*, auto" row="0"
                    class="section-header">
                    <StackLayout orientation="horizontal" col="0">
                        <label text="Trailers" class="section-title" />
                    </StackLayout>
                    <label col="2" text="View all" margin-right="30"
                        class="viewall" />
                </GridLayout>
                <!--Content-->
                <ScrollView orientation="horizontal" row="1">
                    <StackLayout orientation="horizontal" class="section">
                        <trailer class="trailer"
                            v-for="item in TrailerImages"
                            :imageSource="item" />
                    </StackLayout>
                </ScrollView>
            </GridLayout>
            <!--Cast-->
            <GridLayout rows="auto, auto" class="scroll-hon">
                <!--header-->
                <GridLayout columns="auto,*, auto" row="0"
                    class="section-header">
                    <StackLayout orientation="horizontal" col="0">
                        <label text="Casts" class="section-title" />
                    </StackLayout>
                    <label col="2" text="View all" margin-right="30"
                        class="viewall" />
                </GridLayout>
                <!--Content-->
                <ScrollView orientation="horizontal" row="1">
                    <StackLayout orientation="horizontal" class="section">
                        <Cast v-for="item in Cast"
                            :imageSource="item.Image" :Actor="item.Name"
                            :Character="item.Character" class="cast" />
                    </StackLayout>
                </ScrollView>
            </GridLayout>
            <!--review-->
            <GridLayout rows="auto, auto"
                class="section synopsis-section">
                <!--header-->
                <GridLayout columns="auto,*, auto" row="0">
                    <StackLayout orientation="horizontal" col="0">
                        <label text="Reviews" class="section-title" />
                    </StackLayout>
                    <label col="2" text="View all" class="viewall" />
                </GridLayout>
                <!--Content-->
                <StackLayout orientation="vertical" row="1">
                    <Review v-for="item in Reviews"
                        :imageSource='item.image' :review="ReviewText"
                        :name="item.name" class="review" />
                </StackLayout>
            </GridLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import trailer from "./component/trailer";
    import Cast from "./component/Cast";
    import Review from "./component/Review";
    export default {
        components: {
            trailer,
            Cast,
            Review
        },
        data() {
            return {
                Title: "Maleficient: Mistress of Evil",
                Details: "2019 Fantasy/Action 1h58m",
                Synopsis: "Maleficent travels to a grand old castle to celebrate young Aurora's upcoming wedding to Prince Phillip.While there, she meets Aurora 's future mother-in-law -- a conniving queen who hatches a devious plot to destroy the land's fairies. Hoping to stop her, Maleficent joins forces with a seasoned warrior and a group of outcasts to battle the queen and her powerful army.",
                rating: 3,
                Cast: [{
                        Name: "Anglina Jolie",
                        Character: "Maleficent",
                        Image: "~/assets/CastImages/Maleficient/cast1.jpg"
                    },
                    {
                        Name: "Elle Fanning",
                        Character: "Aurora",
                        Image: "~/assets/CastImages/Maleficient/cast2.jpg"
                    },
                    {
                        Name: "Harris Dickson",
                        Character: "Prince Philip",
                        Image: "~/assets/CastImages/Maleficient/cast3.jpg"
                    },
                    {
                        Name: "Michelle Pfeiffer",
                        Character: "Queen Ingrith",
                        Image: "~/assets/CastImages/Maleficient/cast4.jpg"
                    },
                    {
                        Name: "Sam Riley",
                        Character: "Diaval",
                        Image: "~/assets/CastImages/Maleficient/cast5.jpg"
                    },
                    {
                        Name: "Chiwetel Ejiofor",
                        Character: "Conall",
                        Image: "~/assets/CastImages/Maleficient/cast6.jpg"
                    }
                ],
                TrailerImages: [
                    "~/assets/Trailer/Maleficent/trailerImage1.jpg",
                    "~/assets/Trailer/Maleficent/trailerImage2.jpg",
                    "~/assets/Trailer/Maleficent/trailerImage3.jpg",
                    "~/assets/Trailer/Maleficent/trailerImage4.jpg"
                ],
                ReviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero enim purus elit sit arcu molestie urna.",
                Reviews: [{
                        name: "Darell Alexander",
                        image: "~/assets/reviewer/reviewer3.png"
                    },
                    {
                        name: "Jenny Wilson",
                        image: "~/assets/reviewer/reviewer1.png"
                    },
                    {
                        name: "Harold Rusell",
                        image: "~/assets/reviewer/reviewer2.png"
                    },
                    {
                        name: "Gloria Cooper",
                        image: "~/assets/reviewer/reviewer4.png"
                    }
                ],
                Times: ["1:30 PM", "5:20 PM", "8:20 PM", "10:30 PM"]
            };
        },
        computed: {
            darkstar() {
                return 5 - this.rating;
            }
        }
    };
</script>

<style scoped>
    .Page {
        background-color: black;
    }

    .time {
        width: 60;
        height: 20;
        margin-right: 10;
        text-align: center;
        color: white;
        border-radius: 50;
        border-radius: 10;
        background: linear-gradient(to left, #A71D31, #FF4936)
    }

    .star {
        width: 12;
        height: 12
    }

    .synopsis-txt {
        text-wrap: true;
        whitespace: normal;
        text-align: left;
        color: white;
        font-size: 11;
        margin-top: 5;
    }


    .trailer {
        width: 225;
        height: 125;
        margin: 10
    }

    .cast {
        width: 250;
        height: 84;
        margin: 10;
    }

    .review {
        width: 100%;
        height: 100;
        margin: 10;
    }

    .main-title {
        font-size: 22;
        color: white;
        margin: 0 30
    }

    .main-details {
        font-size: 12;
        color: white;
        margin: 0 30
    }

    .section {
        margin-top: 20;
        margin-left: 30;
        margin-bottom: 20;
    }

    .scroll-hon {
        margin-right: 0;
    }

    .synopsis-section {
        margin-right: 30;
    }

    .section-header {
        margin: 0 30
    }

    .section-title {
        color: white;
        font-size: 20;
    }

    .viewall {
        color: #FF4936;
        font-size: 20;
    }
    .section-alt{
        margin: 5 30
    }
</style>