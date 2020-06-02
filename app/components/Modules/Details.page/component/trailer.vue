<template>
    <GridLayout rows="auto,*" class="trailer_Container">
        <Image class="trailer-Image" :src="imageSource" rowSpan="2"
            stretch="aspectFill" />
        <Image src="~/assets/play.png" row="1" verticalAlignment="center"
            horizontalAlignment="center" class="playIcon" />
    </GridLayout>
</template>

<script>
    export default {
        name: "trailer",
        props: ["imageSource"],
        data() {
            return {};
        }
    };
</script>

<style scoped>
    .trailer_Container {
        border-radius: 10;
        background-color: red;
    }

    .trailer-Image {
        width: 100%;
        heigth: 100% ;
        border-radius: 10;
    }

    .playIcon {
        width: 28;
        height: 28;
    }
</style>