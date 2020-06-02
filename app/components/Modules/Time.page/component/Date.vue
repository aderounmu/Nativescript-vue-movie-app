<template>
    <StackLayout orientation="vertical" class="time-conatiner" @tap="$emit('makeActive')">
        <StackLayout orientation="vertical" class="time_txt_container"
            verticalAlignment="center">
            <Label class="time_day" :text="day" />
            <Label class="time_date" :text=" date" />
        </StackLayout>
    </StackLayout>
</template>

<script>
    export default {
        props: ["day", "date"],
        data() {
            return {
                
            };
        }
    };
</script>

<style scoped>
    .time-conatiner {
        border-radius: 10;
    }

    .time_day {
        color: white;
        font-size: 12;
        text-align: center
    }

    .time_date {
        color: white;
        font-size: 18;
        text-align: center
    }

    .time_txt_container{
        margin:10 0
    }
</style>