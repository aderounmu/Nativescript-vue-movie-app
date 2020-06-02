<template>
    <StackLayout orientation="vertical" @tap="$emit('navigatedetails')">
        <StackLayout class="image-container" backgroundColor="lightgray">
            <Image :src="imageSource" stretch="aspectFill"
                class="movie_image" />
        </StackLayout>
        <Label :text="Title" />
        <StackLayout v-if="inCinema" orientation="horizontal">
            <Image v-for="n in rating" class="star"
                src="~/assets/Star1.png" />
            <Image v-for="n in darkstar" class="star"
                src="~/assets/Star2.png" />
        </StackLayout>
    </StackLayout>
</template>

<script>
    export default {
        name: "NowShowingCard",
        props: ["imageSource", "Title", "Rating", "inCinema"],
        data() {
            return {
                rating: this.Rating
            };
        },
        computed: {
            darkstar() {
                return 5 - this.rating;
            }
        },
        methods: {
            navigatedetails() {
                console.log("tapped");
            }
        }
    };
</script>

<style scoped>
    .movie_image {
        width: 100%;
        height: 100%;
        border-radius: 10;
    }

    .star {
        width: 12;
        height: 12
    }

    .image-container {
        border-radius: 10;
        width: 100%;
        height: 81%
    }

    Label {
        text-align: left;
        margin: 5 0;
        color: white;
        font-fmaily: "Roboto-light"
    }
</style>