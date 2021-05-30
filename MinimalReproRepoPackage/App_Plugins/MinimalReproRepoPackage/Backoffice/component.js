class Comments {
    constructor() {
        this.limit = 250;

        this.maxLengthStr = `max length: ${this.limit}`;
        this.remainingStr = 'remaining characters: %0%';
        this.labelText = 'Comment';

        console.log(`I'm the ctor in the component`);
        debugger;
    }

    limitChars = () => {
        if (this.comment.length > this.limit) {
            this.info = this.maxLengthStr;
            this.comment = this.comment.substr(0, this.limit);
        } else {
            this.info = this.remainingStr.replace('%0%', this.limit - this.comment.length);
        }
    };
}

const template = `
    <div class="umb-el-wrap">
        <label class="control-label">
            {{ $ctrl.labelText }}
            <small ng-bind="$ctrl.info"></small>
        </label>
        <div class="controls">
            <textarea 
                ng-model="$ctrl.comment" 
                ng-change="$ctrl.limitChars()"
                no-dirty-check
                umb-auto-focus
                rows="5"                     
                class="umb-property-editor umb-textarea"></textarea>
        </div>
    </div>`;

export const CommentsComponent = {
    name: 'demoComments',
    transclude: true,
    bindings: {
        comment: '=',
    },
    template: template,
    controller: Comments
};