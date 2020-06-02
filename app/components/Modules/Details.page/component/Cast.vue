<template>
    <GridLayout columns="*, *, *" class="cast-container">
        <StackLayout class="image-container" col="0">
            <Image class="cast-image" :src="imageSource"
                stretch="aspectFill" />
        </StackLayout>
        <StackLayout orientation="vertical" verticalAlignment="center"
            colSpan="2" col="1" class="cast-txt-container">
            <Label :text="Actor" class="cast-name" />
            <Label :text="Character" class="cast-character" />
        </StackLayout>
    </GridLayout>
</template>

<script>
    export default {
        props: ["imageSource", "Actor", "Character"],
        data() {
            return {};
        }
    };
</script>

<style scoped>
    .cast-container {
        border-radius: 20;
        background-color: #1E1E1E;
    }

    .image-container {
        border-radius: 20;
        width: 33%
    }

    .cast-image {
        border-radius: 20;
        width: 100%;
        height: 100%;
    }

    .cast-name {
        text-align: left;
        color: white;
        font-size: 16;
        margin-bottom: 5 
    }

    .cast-character {
        color: #828282;
        font-size: 14;
    }
    .cast-txt-container{
        margin-left: 10
    }
</style>