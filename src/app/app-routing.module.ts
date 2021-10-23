import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { ValidTokenGuard } from './guards/valid-token.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'nex',
    component: EntityExtractionComponent,
    canActivate: [ValidTokenGuard]
  },
  {
    path: 'sim',
    component: TextSimilarityComponent,
    canActivate: [ValidTokenGuard]
  },
  {
    path: 'li',
    component: LanguageDetectionComponent,
    canActivate: [ValidTokenGuard]
  },
  {
    path: 'sent',
    component: SentimentAnalysisComponent,
    canActivate: [ValidTokenGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [ValidTokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
