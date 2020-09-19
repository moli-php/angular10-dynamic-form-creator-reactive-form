import { Component, OnInit, Renderer2 } from '@angular/core';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IMultiSelectOption as A, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import { constants } from './account.constants';

/* Note */
/*
unfinnished, 'model onchange' not working eg (ngModelChange)="onChangekeywordMasterCategory($event)"
*/

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css'],
})
export class MultiselectDropdownComponent implements OnInit {

  // @Input() keywordMasterCategoryDefaultTexts: IMultiSelectTexts;

  public constants = constants;
  public filterKeys: any;
  public keywordMasterCategoryOptions: A[];
  public keywordMasterCategorySettings: IMultiSelectSettings = {
      fixedTitle: true,
      containerClasses: 'intent_category_container',
      showCheckAll: true,
      showUncheckAll: true,
  }
  public keywordMasterCategoryDefaultTexts: IMultiSelectTexts = {
      defaultTitle : 'Intent',
  }
 

  constructor( private renderer: Renderer2) {
    this.keywordMasterCategoryDefaultTexts =  {
      defaultTitle: 'wdfdsf'
    }
   }

  ngOnInit(): void {
    this.initFilters();
    this.initFilterDropDown();
    console.log(this.constants)
  }

  public dropdownOpenedKeywordMasterCategory() {
    setTimeout (() => {
        this.onChangekeywordMasterCategory(this.filterKeys.keywordMasterCategory);
    }, 20);
  }

  public onChangekeywordMasterCategory(options) {
    const checkElem = document.getElementsByClassName('check-control-check')[0];
    const uncheckElem = document.getElementsByClassName('check-control-uncheck')[0];
    // console.log(checkElem)
    // console.log(options)
    // console.log(this.filterKeys.keywordMasterCategory)
    if (options && options.length) {
        this.renderer.addClass(checkElem, 'hide-elem');
        this.renderer.removeClass(uncheckElem, 'hide-elem');
    } else {
        this.renderer.addClass(uncheckElem, 'hide-elem');
        this.renderer.removeClass(checkElem, 'hide-elem');
    }
  }

  private initFilterDropDown() {
    this.keywordMasterCategoryOptions = this.constants.keyword_master_categories;
    // console.log(this.keywordMasterCategoryOptions)
    this.filterKeys.keywordMasterCategory = [];
    this.keywordMasterCategoryOptions.forEach((item ) => {
        this.filterKeys.keywordMasterCategory.push(item.id);
    });


  }

  private initFilters() {
    this.filterKeys = {
        favorite: undefined,
        keywordMasterCategory: [undefined]
    };
  }

  public clearSearch() {
    this.initFilters();
    localStorage.setItem('filterKeys', JSON.stringify(this.filterKeys));
  }

  private a(title: IMultiSelectTexts, b: string) {
    title.defaultTitle = b;
    console.log(title.defaultTitle);
    // return this;
    return title;
  }

  public submitData() {
    // console.log(this.filterKeys.keywordMasterCategory)

    // this.keywordMasterCategoryDefaultTexts.defaultTitle = 'ssssss';

    this.keywordMasterCategoryDefaultTexts = {
      defaultTitle : 'test'
    }




  }

  OnSelect(e) {
    console.log(e)
  }

}
