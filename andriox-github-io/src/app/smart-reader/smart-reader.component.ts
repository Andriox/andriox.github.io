import { Component, OnInit, HostListener } from '@angular/core';
import { Sentence, KEY_CODE, Character } from '../services/content-reader.service';

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

  currentMode: string = 'SETUP';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.currentMode == 'READING') {
      if (event.keyCode === KEY_CODE.DOWN_ARROW) {
        this.currentIndex++;
        this.displayLine();
      }
    }
  }

  startReading() {
    let chars = this.contentToRead.split('');
    let sentence = new Sentence();
    this.sentences.push(sentence);
    chars.forEach(value => {
      let character = new Character(value);
      if (!sentence.add(character)) {
        sentence = new Sentence();
        sentence.add(character);
        this.sentences.push(sentence);
      }
    });
    this.currentMode = 'READING';
    this.displayLine();
  }

  readAgain() {
    this.currentData = [];
    this.currentMode = 'READING';
    this.displayLine();
  }

  readNew() {
    this.currentMode = 'SETUP';
    this.contentToRead = '';
    this.currentData = [];
    this.sentences = [];
  }

  displayLine() {
    if (this.currentIndex == this.sentences.length) {
      // this.currentData = [];
      this.currentMode = 'DONE';
      this.currentIndex = 0;
    } else {
      let data = this.sentences[this.currentIndex].characters.map((data) => data.getContent())
        .reduce((accumulator: string, data: string) => {
          return accumulator + data;
        }, "");
      this.currentData[this.currentIndex] = data;
    }
  }


}
