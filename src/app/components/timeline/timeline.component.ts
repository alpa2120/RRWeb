import { Component, OnInit } from '@angular/core';
import {  Divider,
  PageLoader,
  ToolTip,
  Badge,
  CheckRadio,
  Slider,
  CheckSwitch,
  QuickView, QuickViewHeader, QuickViewBody, QuickViewBlock, QuickViewFooter,
  Steps, StepItem, StepMarker, StepDetails, StepTitle,
  Timeline, TimelineHeader, TimelineItem, TimelineMarker, TimelineContent
} from 'bloomer-extensions'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
