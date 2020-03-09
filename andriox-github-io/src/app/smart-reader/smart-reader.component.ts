import { Component, OnInit, HostListener } from '@angular/core';
import { Sentence, KEY_CODE, Character } from '../services/content-reader.service';
import { SentenceHighlighterService, ReadingStatus, ReadingMode } from '../sentence-highlighter.service';
import { LineExplorerService } from '../line-explorer.service';

@Component({
  selector: 'app-smart-reader',
  templateUrl: './smart-reader.component.html',
  styleUrls: ['./smart-reader.component.css']
})
export class SmartReaderComponent implements OnInit {

  contentToRead: string;
  currentIndex: number = 0;

  sentences = new Array<Sentence>();

  currentData: string[] = [];

  readingStatus: ReadingStatus = ReadingStatus.SETUP;
  readingMode: ReadingMode = ReadingMode.HIGHLIGHTER;
  modes = [ReadingMode.UNCOVER, ReadingMode.HIGHLIGHTER];

  service: any;

  constructor() { }

  ngOnInit() {

  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.readingStatus == ReadingStatus.READING) {
      if (event.keyCode === KEY_CODE.DOWN_ARROW) {
        this.currentIndex++;
        this.service.displayLine(this);
      }
    }
  }

  enumValue(ordinal: number, enumVar: any) {
    switch (enumVar) {
      case "ReadingStatus":
        return ReadingStatus[ordinal];
      case "ReadingMode":
        return ReadingMode[ordinal];
    }
    return '';
  }

  startReading() {
    switch (+this.readingMode) {
      case ReadingMode.UNCOVER:
        this.service = new LineExplorerService();
        break;
      case ReadingMode.HIGHLIGHTER:
        this.service = new SentenceHighlighterService();
        break;
    }

    this.service.startReading(this);
  }

  readAgain() {
    this.service.readAgain(this);
  }

  readNew() {
    this.service.readNew(this);
  }

  //
  // startReading() {
  //   let chars = this.contentToRead.split('');
  //   let sentence = new Sentence();
  //   this.sentences.push(sentence);
  //   chars.forEach(value => {
  //     let character = new Character(value);
  //     if (!sentence.add(character)) {
  //       sentence = new Sentence();
  //       sentence.add(character);
  //       this.sentences.push(sentence);
  //     }
  //   });
  //   this.readingStatus = ReadingStatus.READING;
  //   this.displayLine();
  // }
  //
  // readAgain() {
  //   this.currentData = [];
  //   this.readingStatus = ReadingStatus.READING;
  //   this.displayLine();
  // }
  //
  // readNew() {
  //   this.readingStatus = ReadingStatus.SETUP;
  //   this.contentToRead = '';
  //   this.currentData = [];
  //   this.sentences = [];
  // }
  //
  // displayLine() {
  //   if (this.currentIndex == this.sentences.length) {
  //     // this.currentData = [];
  //     this.readingStatus = ReadingStatus.DONE;
  //     this.currentIndex = 0;
  //   } else {
  //     let data = this.sentences[this.currentIndex].characters.map((data) => data.getContent())
  //       .reduce((accumulator: string, data: string) => {
  //         return accumulator + data;
  //       }, "");
  //     this.currentData[this.currentIndex] = data;
  //   }
  // }


}
