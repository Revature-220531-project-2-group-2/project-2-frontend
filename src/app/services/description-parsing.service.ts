import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescriptionParsingService {

  constructor() { }

  splitNewLines(str: string): string[] {
    let splitStr = str.split(/\n/)

    return splitStr
  }

  parseDesc(str: string): any[] {
    let strArr = this.splitNewLines(str)
    let result = []
    let isTable = false
    let temp = {
      threeHead: '',
      fourHead: '',
      bold: '',
      body: '',
      listItem: '',
      tableHead: <any>[],
      tableRow: <any>[]  
    }
    for (let i in strArr) {
      if (strArr[i].includes('|')) {
        if (!isTable){
          temp.tableHead = strArr[i].split('|')
        } else if (!strArr[i].includes('|--')) {
          temp.tableRow.push(strArr[i].split('|'))
        }
        isTable = true
        if ( Number.parseInt(i) + 1 == strArr.length && isTable) result.push(temp)
        continue;
      } else if (isTable) {
        isTable = false
        result.push(temp)
        temp = {
          threeHead: '',
          fourHead: '',
          bold: '',
          body: '',
          listItem: '',
          tableHead: <any>[],
          tableRow: <any>[]
        }
      } 
      if (/^####/.test(strArr[i])){
        temp.fourHead = strArr[i].slice(4)
      } else if (/^##/.test(strArr[i])) {
        temp.threeHead = strArr[i].slice(3)
      } else if (/^\*\*_/.test(strArr[i])){
        //                             1    2    3    4
        let arr = strArr[i].match(/^(\*\*_)(.+)(_\*\*)(.*)/)
          if(arr){
            temp.bold = arr[2]
            temp.body = arr[4]
          } 
      } else if (/^\*\*/.test(strArr[i])){
        //                             1    2    3    4
        let arr = strArr[i].match(/^(\*\*)(.+)(\*\*)(.*)/)
          if(arr){
            temp.bold = arr[2]
            temp.body = arr[4]
          } 
      } else if(/^(\*)(.*)/.test(strArr[i])) {
        temp.listItem = strArr[i].match(/^(\*)(.*)/)![2];
        temp.listItem = temp.listItem.split("*").join("")
      }else {
        temp.body = strArr[i]
      }
      result.push(temp)
      temp = {
        threeHead: '',
        fourHead: '',
        bold: '',
        body: '',
        listItem: '',
        tableHead: <any>[],
        tableRow: <any>[]
      } 
    }
    return result
  }

}
