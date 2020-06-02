<template>
    <StackLayout orientation="horizontal">
        <Image :src="imageSource" />
        <StackLayout orientation="vertical" verticalAlignment="center"
            class="review-txt-container">
            <Label :text="review" class="review-txt" />
            <Label :text="nameComp" class="name-txt" />
        </StackLayout>
    </StackLayout>
</template>

<script>
    export default {
        props: ["imageSource", "review", "name"],
        data() {
            return {};
        },
        computed: {
            nameComp() {
                return "-" + this.name;
            }
        }
    };
</script>

<style scoped>
    Image {
        width: 60;
        height: 60
    }

    .review-txt {
        text-wrap: true;
        whitespace: normal;
        text-align: left;
        color: white;
        font-size: 11;
    }

    .name-txt {
        color: #828282;
        font-size: 11;
    }

    .review-txt-container {
        margin: 0 10
    }
</style>