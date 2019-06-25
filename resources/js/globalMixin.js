import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { bus } from './app'
export const globalMixin = {
    props: ['dynamicIndex'],
    computed: {
        ...mapState([
            'divData',
            'showNavBar',
            'dynamicType',
            'editorTempData',
        ])
    },
    data() {
      return {
            font: 'testset',
            fontFamily: '',
      };
    },
    created () {
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();   
          });
    },
    methods: {
        ...mapActions([
            'ACTION_CHANGE_STATE',
            'ACTION_ADD_VALUE_TO_DIV_DATA',
        ]),
        ...mapMutations([
            'REMOVE_ITEM_FROM_DIV_DATA',
            'REMOVE_ITEM_AT_DIV_DATA',
            'MOVE_ITEM_DIV_DATA',
        ]),
        addClick (type) {
            $('.editable').html('');
            this.ACTION_CHANGE_STATE(['dynamicIndex', this.dynamicIndex])
            this.ACTION_CHANGE_STATE(['dynamicType', type])
            this.ACTION_CHANGE_STATE(['editorTempData', this.divData[this.dynamicIndex][type]])
            // this.ACTION_CHANGE_STATE(['editorTempData', $('.editable').html()])
            // this.editorData = this.divData[this.dynamicIndex][type]
            $('.editable').html(this.editorTempData)
            $('#exampleModal').modal();
        },
        removeItem (item) {
            this.REMOVE_ITEM_FROM_DIV_DATA(item)
        },
        removeItemAt (index) {
            this.REMOVE_ITEM_AT_DIV_DATA(index)
        },
        dragStart (which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },
        dragEnter (ev) {
            /* 
            if (ev.clientY > ev.target.height / 2) {
                ev.target.style.marginBottom = '10px'
            } else {
                ev.target.style.marginTop = '10px'
            }
            */
        },
        dragLeave (ev) {
            /* 
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
            */
        },
        dragEnd (ev) {
            this.dragging = -1
        },
        dragFinish (to, ev) {
            this.moveItem(this.dragging, to);
            // ev.target.style.marginTop = '2px'
            // ev.target.style.marginBottom = '2px'
        },
        moveItem (from, to) {
            // move item when drag and drop event fires
            if (to === -1) {
                this.removeItemAt(from);
            } else {
                this.MOVE_ITEM_DIV_DATA([from, to])
            }
        },
        addfont(command, showUI, value) {
            document.execCommand(command, showUI, value);
        },
        changeColor(e) {
            this.addfont("foreColor", false, e.target.value);
        },
        saveIndex (index) {
            this.ACTION_CHANGE_STATE(['dynamicIndex', index])
        },
        applyChanges () {
            var text = $('.editable').html();
           $(this).css('color', 'black')
            this.ACTION_ADD_VALUE_TO_DIV_DATA(text)
        },
        removeFromDiv () {
        this.REMOVE_ITEM_AT_DIV_DATA(this.dynamicIndex)
       
        },
        openNav() {
            this.ACTION_CHANGE_STATE(['showNavBar', true])
            var newtest = (document.getElementById("myNav").style.height = "100%");
        }, 
        backgroungdColor(){
          $('.one').css('background-color', 'black')
        }

    }
  };