// 开源项目，未经作者同意，不得以抄袭/复制代码/修改源代码版权信息。
// Copyright @ 2018-present xiejiahe. All rights reserved.
// See https://github.com/xjh22222228/nav

import { Component } from '@angular/core'
import { $t } from 'src/locale'
import { CommonService } from 'src/services/common'
import { JumpService } from 'src/services/jump'
import event from 'src/utils/mitt'

@Component({
  selector: 'app-side',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export default class SideComponent {
  $t = $t

  constructor(
    public commonService: CommonService,
    public jumpService: JumpService
  ) {}

  ngAfterViewInit() {
    if (this.commonService.settings.superOverType === 'ellipsis') {
      this.commonService.getOverIndex('.topnav .over-item')
    }
  }

  ngOnDestroy() {
    this.commonService.overIndex = Number.MAX_SAFE_INTEGER
  }

  openCreateWebModal() {
    event.emit('CREATE_WEB', {
      threeIndex: this.commonService.selectedIndex,
    })
  }
}
