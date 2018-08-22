<template>
    <div id='toolbar'>
        <i @click="addFile" class="glyphicon glyphicon-plus"></i>
        <!-- <i @click="favFile" v-bind:class="{star: isStar}" class="glyphicon glyphicon-star"></i> -->
        <i @click="deleFile" class="glyphicon glyphicon-remove"></i>
        <i @click="favFile" v-bind:class="{fav: isStar}" class="glyphicon glyphicon-star"></i>
    </div>
</template>

<script>
export default {
    name: 'tools',
    data () {
        return {
            isStar: false
        }
    },
    computed:{
        judgeProp() {
            if (this.isStar == true) {
                return this.$store.state.activeNote.star;
            }
        }
        // isStar: function () {
        //     return this.$store.state.activeNote.star;
        //     // console.log(star)
        // }
    },
    methods: {
        // isStar: function () {
        //     return this.$store.state.activeNote.star;
        //     console.log(star)
        // },
        addFile: function () {
            this.$store.dispatch('addNote');
        },
        deleFile: function () {
            this.$store.dispatch('deleNote', this.$store.state.activeNote);
        },
        favFile: function () {
            // let isStar = this.$store.state.activeNote.star ? false: true;
            if (this.isStar) {
                this.$store.dispatch('addStar');
                this.isStar = false;
            }
            else {
                this.$store.dispatch('removeStar')
                this.isStar = true;
            }
        }
    }
}

</script>
<style>
    #toolbar {
        /* display: table-cell; */
        width: 70px;
        /* left: -100px; */
        /* height: 300px; */
        /* margin-left: -100%; */
        background-color: #0d3349;
        /* left: -300px; */
        /* position: relative; */
        
    }
    #toolbar i{
        float: left;
        /* margin-right: 100px; */
        color:whitesmoke; 
        height:50px;
        font-size:20px;
        line-height:50px;
        padding-left:25px;
        margin-top: 40px;
        line-height: 50px;
        font-size: 30px;
        /* margin-bottom: 35px; */
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.5s ease;
    }
    #toolbar i:hover {
        opacity: 1;
    }
    #toolbar .fav {
        color: yellow;
    }

</style>

