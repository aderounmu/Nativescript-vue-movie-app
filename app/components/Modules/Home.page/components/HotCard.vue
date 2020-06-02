<template>
    <StackLayout orientation="vertical" class="card-container" >
        <StackLayout class="image-container">
            <Image :src="imageSource" stretch="aspectFill" />
        </StackLayout>
        <Label :text="Title" class="title" />
    </StackLayout>
</template>

<script>
    export default {
        name: "HotCard",
        props: ["imageSource", "Title", "onFocus"],
        data() {
            return {};
        }
    };
</script>

<style scoped>
    Image {
        width: 100%;
        height: 100%;
    }

    .image-container {
        border-radius: 20;
        width: 100%;
        height: 144
    }

    Image {
        border-radius: 20;
    }

    Label {
        text-align: center;
        padding: 5;
        margin: 5 10;
        color: white;
        text-wrap: true;
        font-fmaily: "Roboto-light"
    }
    .title{
        font-size: 11px;
    }
</style>