<template>
    <div id="file-list">
        <div id="title">
            <h3>notes</h3>
        </div>
        <div class="container">
            <div class="btn-list">
                <div v-bind:class="{active:showAll == true}" v-on:click="showAllNotes">All Notes</div>
                <div :class="{active:showFav == true}" @click="showFavourNotes">Favourite</div>
            </div>
            <div class="list-group-item">
                <ul class="show-all" v-if="showAll">
                    <li v-for="(item,index) in notes" :key="index" :class="{activeNote:item == activeNote}" @click="clickNote(item)">{{item.text}}</li>
                </ul>
                <ul class="favourites" v-else-if="showFav">
                    <li class="note" v-for="(item, index) in favournotes" :key="index" :class="{activeNote:notes[item] == activeNote}" @click="clickNote(notes[item])">{{item.text}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
// import {mapActions,mapstate} from 'vuex'
export default {
    name: 'fileList',
    data () {
        return {
            showAll: true,
            showFav: false,
            isStar: false
        }
    },
    computed: {
        notes: function () {
            return this.$store.state.notes;
        },
        favournotes: function () {
            // console.log(this.$store.state.notes)
            return this.$store.state.notes.filter(note => {
                return note.star;
            })
        },
        activeNote: function () {
            return this.$store.state.activeNote;
        }
    },
    methods: {
        showAllNotes: function () {
            this.showAll = true;
            this.showFav = false;
        },
        showFavourNotes: function () {
            this.showFav = true;
            this.showAll = false;
        },
        clickNote: function (item) {
            this.$store.dispatch('updateActiveNote', item);
        }
    }
}                                                       
</script>

<style>
    #file-list {
        width: 300px;
        /* height: 300px; */
        /* display: table-cell; */
        background-color: rgb(232, 233, 236);
    }
    #file-list #title{
        margin-top: 60px;
        
    }
     #file-list .container {
      /* height: calc(100% - 137px);
      max-height: calc(100% - 137px); */
      overflow: auto;
     width: 100%;
     padding: 0; 
    }
    .btn-list {
        margin: 0 auto;
        margin-bottom: 10px;
    }
    .btn-list div {
        cursor: pointer;
        display: inline-block;
        border: 1px solid  #eff3f5;
        background-color: rgb(188, 189, 197);
        border-radius: 2px;
        padding: 4px 18px;
        margin-left: -5px;
    }

#file-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}
.show-all, .favourites {
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.show-all li, .favourites li {
    overflow: hidden;
    word-wrap: break-word; 
    height: 50px;
    margin: 0;
    list-style: none;
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
}
</style>


