import { Injectable } from '@angular/core';
import { Sentence, Character } from './services/content-reader.service';
import { ReadingStatus, ReadingMode } from './sentence-highlighter.service';
import { SmartReaderComponent } from './smart-reader/smart-reader.component';

@Injectable({
  providedIn: 'root'
})
export class LineExplorerService {

  condition: Function = (charsLength: Number) => charsLength == 85;

  constructor(private contentToRead: string) {
  }

  startReading(caller: SmartReaderComponent) {
    let chars = this.contentToRead.split('');
    let sentence = new Sentence(this.condition);
    caller.sentences.push(sentence);
    chars.forEach(value => {
      let character = new Character(value);
      if (!sentence.add(character, caller.readingMode)) {
        sentence = new Sentence(this.condition);
        sentence.add(character, caller.readingMode);
        caller.sentences.push(sentence);
      }
    });
    caller.readingStatus = ReadingStatus.READING;
    this.displayLine(caller);
  }

  readAgain(caller: SmartReaderComponent) {
    caller.currentData = [];
    caller.readingStatus = ReadingStatus.READING;
    this.displayLine(caller);
  }

  readNew(caller: SmartReaderComponent) {
    caller.readingStatus = ReadingStatus.SETUP;
    caller.contentToRead = '';
    caller.currentData = [];
    caller.sentences = [];
  }

  displayLine(caller: SmartReaderComponent) {
    if (caller.currentIndex == caller.sentences.length) {
      // caller.currentData = [];
      caller.readingStatus = ReadingStatus.DONE;
      caller.currentIndex = 0;
    } else {
      let data = caller.sentences[caller.currentIndex].characters.map((data) => data.getContent())
        .reduce((accumulator: string, data: string) => {
          return accumulator + data;
        }, "");
      caller.currentData[caller.currentIndex] = data;
    }
  }


}
