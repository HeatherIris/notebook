<template>
    <div id="note-editor">
        <button v-on:click="saveNote">save</button>
        <textarea class="text-input" v-on:input="saveText" v-bind:value="text" name="" id="" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
    name:'editor',
    data () {
        return {
            editNote: ''
        }
        // editNote: '';
    },
    computed: {
        text: function () {
            this.editNote = this.$store.state.activeNote.text;
            if (this.$store.state.activeNote.text == undefined) {
                return '';
            }
            return this.$store.state.activeNote.text;
        }
        
    },
    methods: {
            saveText: function (e) {
                this.editNote = e.target.value;
            },
            saveNote: function () {
                if (this.editNote) {
                    this.$store.dispatch('editNote', this.editNote);
                }
            }       
        }
}
</script>

<style>
    #note-editor {
        /* display: table-cell; */
        /* float: left; */
        flex: 4;
        /* width: 400px; */
        /* height: 300px; */
        /* margin-left: -100px; */
        /* position: relative; */
         /* right: -100px; */
    }
    #note-editor textarea {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
    .text-input {
        width: 100%;
        height: 80%;
        border: none;
        outline: none;
        padding: 20px;
        font-size: 15px;
    }
    button {
        width: 100%;
        background-color: #0d3349;
        color: white;
        border: none;
        outline: none;
    }
</style>


