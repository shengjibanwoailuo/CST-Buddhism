import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QiuqianComponent } from './components/qiuqian/qiuqian.component';
import { BaziComponent } from './components/bazi/bazi.component';
import { GongfoComponent } from './components/gongfo/gongfo.component';
import { XiuxingComponent } from './components/xiuxing/xiuxing.component';
import { GongdeComponent } from './components/gongde/gongde.component';
import { XindeComponent } from './components/xiuxing/xinde/xinde.component';
import { AddxindeComponent } from './components/xiuxing/xinde/addxinde/addxinde.component';
import { SuanmingComponent } from './components/bazi/suanming/suanming.component';
import { ResultComponent } from './components/bazi/result/result.component';

import { ZhuyinjingshuComponent } from './components/gongde/zhuyinjingshu/zhuyinjingshu.component'
import { DialogComponent } from './components/gongfo/dialog/dialog.component'
import { LibraryComponent } from './components/xiuxing/library/library.component';
import { FojingComponent } from './components/xiuxing/library/fojing/fojing.component';
import { FozhouComponent } from './components/xiuxing/library/fozhou/fozhou.component';
import { DetailComponent } from './components/bazi/detail/detail.component';
import { ZhouGeneralComponent } from './components/xiuxing/library/fozhou/zhou-general/zhou-general.component';
import { JingGeneralComponent } from './components/xiuxing/library/fojing/jing-general/jing-general.component';
import { JingyuanwenComponent } from './components/xiuxing/library/fojing/jingGeneral/jingyuanwen/jingyuanwen.component';
import { JingyiwenComponent } from './components/xiuxing/library/fojing/jingGeneral/jingyiwen/jingyiwen.component';
import { JuanxianghuoComponent } from './components/gongde/juanxianghuo/juanxianghuo.component';
import { SimiaoComponent } from './components/xiuxing/simiao/simiao.component';
import { SimiaotwoComponent } from './components/xiuxing/simiao/simiaotwo/simiaotwo.component';
import { SimiaothreeComponent } from './components/xiuxing/simiao/simiaothree/simiaothree.component';
import { FoyinComponent } from './components/xiuxing/foyin/foyin.component';
import { XuangeComponent } from './components/xiuxing/foyin/xuange/xuange.component';
import { JieqianComponent } from './components/qiuqian/jieqian/jieqian.component';
import { SearchResultComponent } from './components/xiuxing/library/search-result/search-result.component';
import { QifuComponent } from './components/gongfo/qifu/qifu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: "welcome", pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bazi', component: BaziComponent },
  { path: 'qiuqian', component: QiuqianComponent },
  { path: 'gongfo', component: GongfoComponent },
  { path: 'xiuxing', component: XiuxingComponent },
  { path: 'gongde', component: GongdeComponent },

  // 子页面路由写在下方
  { path: 'suanming', component: SuanmingComponent },
  { path: 'xiuxing/xinde', component: XindeComponent },
  { path: 'xiuxing/foyin', component: FoyinComponent },
  { path: 'xiuxing/foyin/xuange', component: XuangeComponent },
  { path: 'gongde/zhuyinjingshu', component: ZhuyinjingshuComponent },
  { path: 'gongde/juanxianghuo', component: JuanxianghuoComponent },
  { path: 'gongfo/dialog', component: DialogComponent },
  {
    path: 'library', component: LibraryComponent,
    children: [
      { path: '', redirectTo: 'fozhou', pathMatch: 'full' },
      { path: 'fojing', component: FojingComponent },
      { path: 'fozhou', component: FozhouComponent }
    ]
  },
  { path: 'searchResult', component: SearchResultComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'zhouGeneral', component: ZhouGeneralComponent },
  { path: 'jingGeneral', component: JingGeneralComponent },
  { path: 'jingyuanwen', component: JingyuanwenComponent },
  { path: 'jingyiwen', component: JingyiwenComponent },
  { path: 'result', component: ResultComponent },
  { path: 'simiao', component: SimiaoComponent },
  { path: 'simiaotwo', component: SimiaotwoComponent },
  { path: 'simiaothree', component: SimiaothreeComponent },
  { path: 'xiuxing/xinde/addxinde', component: AddxindeComponent },
  { path: 'jieqian', component: JieqianComponent },
  { path: 'qifu', component: QifuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
