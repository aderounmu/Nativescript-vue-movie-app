<template>
    <ScrollView orientation="vertical" class="Page">
        <StackLayout orientation="vertical">
            <!-- Date --->
            <GridLayout rows="auto, auto">
                <!--header-->
                <GridLayout columns="auto" row="0" class="section">
                    <StackLayout orientation="horizontal" col="0">
                        <label class="title" text="Date" />
                    </StackLayout>
                </GridLayout>
                <!--Content-->
                <ScrollView orientation="horizontal" row="1">
                    <StackLayout orientation="horizontal" class="section">
                        <Date v-for="(item,index) in Dates" :key="index"
                            :day="item.day" :date="item.date" class="date"
                            :class="{ActiveDate: index === activeItem}"
                            @makeActive="dateActive(index)" ref="dates"
                             />
                    </StackLayout>
                </ScrollView>
            </GridLayout>
            <!--Venue-->
            <GridLayout rows="auto, auto" class="section section2">
                <!--header-->
                <GridLayout columns="auto" row="0">
                    <StackLayout orientation="horizontal" col="0">
                        <label class="title" text="Venue" />
                    </StackLayout>
                </GridLayout>
                <!--Content-->
                <StackLayout orientation="vertical" row="1">
                    <label class="venuelabel1" text="Film House" />
                    <label class="venuelabel2"
                        text="Adeniran Ogunsanya St, Surulere, Lagos" />
                </StackLayout>
            </GridLayout>
            <!--Time-->
            <GridLayout rows="auto, auto" class="section section2">
                <!--header-->
                <GridLayout columns="auto" row="0">
                    <StackLayout orientation="horizontal" col="0">
                        <label class="title" text="Time" />
                    </StackLayout>
                </GridLayout>
                <!--Content-->
                <StackLayout orientation="vertical" row="1">
                    <StackLayout class="subsection" orientation="vertical">
                        <Label class="venuelabel1" text="Hall 3" />
                        <GridLayout rows="auto, auto">
                            <StackLayout orientation="horizontal" row="0">
                                <StackLayout v-for="item in Time.Hall3row1"
                                    orientation="vertical"
                                    :class="item.available" class="time">
                                    <label :text="item.time"
                                        verticalAlignment="center" />
                                </StackLayout>
                            </StackLayout>
                            <StackLayout orientation="horizontal" row="1">
                                <StackLayout v-for="item in Time.Hall3row2"
                                    orientation="vertical"
                                    :class="item.available" class="time">
                                    <label :text="item.time"
                                        verticalAlignment="center" />
                                </StackLayout>
                            </StackLayout>
                        </GridLayout>
                    </StackLayout>
                    <StackLayout class="subsection" orientation="vertical">
                        <Label class="venuelabel1" text="Hall 7" />
                        <GridLayout rows="auto">
                            <StackLayout orientation="horizontal" row="0">
                                <StackLayout v-for="item in Time.Hall7"
                                    orientation="vertical"
                                    :class="item.available" class="time">
                                    <label :text="item.time"
                                        verticalAlignment="center" />
                                </StackLayout>
                            </StackLayout>
                    </StackLayout>
                </StackLayout>
            </GridLayout>
        </StackLayout>
    </ScrollView>
</template>

<script>
    import Date from "./component/Date";
    export default {
        components: {
            Date
        },
        data() {
            return {
                activeItem: null,
                Dates: [{
                        day: "Mon",
                        date: "17"
                    },
                    {
                        day: "Tue",
                        date: "18"
                    },
                    {
                        day: "Wed",
                        date: "19"
                    },
                    {
                        day: "Thu",
                        date: "20"
                    },
                    {
                        day: "Fri",
                        date: "21"
                    },
                    {
                        day: "Sat",
                        date: "22"
                    },
                    {
                        day: "Sun",
                        date: "23"
                    }
                ],
                Time: {
                    Hall3row1: [{
                            time: "1:30 PM",
                            available: "nonavailableTime"
                        },
                        {
                            time: "5:20 PM",
                            available: "nonavailableTime"
                        },
                        {
                            time: "8:20 PM",
                            available: "availableTime"
                        }
                    ],
                    Hall3row2: [{
                        time: "10:30",
                        available: "availableTime"
                    }],
                    Hall7: [{
                            time: "1:30 PM",
                            available: "nonavailableTime"
                        },
                        {
                            time: "8:20 PM",
                            available: "availableTime"
                        },
                        {
                            time: "10:30 PM",
                            available: "availableTime"
                        }
                    ]
                }
            };
        },
        methods: {
            //to make date selectable
            dateActive(index) {
                this.activeItem = index;
                console.log(index);
                console.log(this.activeItem);
            }
        },
    };
</script>

<style scoped>
    .Page {
        //background: linear-gradient(to bottom, #A41C30, #3B0A11, #000000)
    }

    .section {
        margin-left: 30;
    }

    .section2 {
        margin-top: 10;
        margin-bottom: 10;
    }

    .subsection {
        margin-left: 10;
        margin-top: 5
    }

    .date {
        height: 70;
        width: 60;
        margin: 10 10 10 0;
        //background-color: pink;
    }

    .time {
        text-align: center;
        color: white;
        width: 90;
        height: 30;
        padding: 5;
        margin: 5;
        border-radius: 8
    }

    .availableTime {
        background: linear-gradient(to left, #FF4936, #BB1A34);
    }

    .nonavailableTime {
        background: #828282;
    }

    .title {
        font-size: 22;
        color: white;
    }

    .venuelabel1 {
        font-size: 16;
        color: white;
    }

    .venuelabel2 {
        font-size: 14;
        color: white;
    }

    .ActiveDate {
        background: linear-gradient(to bottom, #FF4936, #BB1A34);
    }
</style>