import { Module } from 'nefbl'

// 组件
import AppComponent from './App/index'

// 指令
import uiBind from 'sprout-ui/nefbl/directive/ui-bind'
import uiModel from 'sprout-ui/nefbl/directive/ui-model'
import uiOn from 'sprout-ui/nefbl/directive/ui-on'
import uiLazy from 'sprout-ui/nefbl/directive/ui-lazy'
import uiCode from './directives/ui-code'
import uiGotoExample from './directives/ui-goto-example'

@Module({
    declarations: [
        AppComponent,
        uiBind, uiModel, uiOn, uiLazy, uiGotoExample, uiCode
    ],
    imports: [],
    exports: [],
    bootstrap: AppComponent
})
export default class {

}
