function displayFooterContent() {
  return `

    <span>
        <b id="currentPageNumber"></b>
            von 
        <b id="totalPagesAmount"></b> 
            Fragen
    </span>
    
    <button
              onclick="nextQuestion()"
              type="button"
              class="btn btn-primary"
              disabled
              id="next-Button"
            >
              Nächste Frage
    </button>
    `;
}

function showFinalScreen() {
  return `

           <div
      class="card quizcard endScreenPadding endScreenCard"
      style="width: 18rem"
    >
      <img
        src="./assets/img/brain result.png"
        class="card-img-top endscreenImg endScreenPadding"
      />

      <div class="card-body centerText" id="endScreen">
        <h2 class="card-title">Super, du hast es geschafft!</h2>

        <div class="score">
          <b class="colorOrange">Erreichte Punktzahl</b>
          <div class="answeredQuestions">
          <b id="finalScreenRightAnswers">0</b>
          <b>von</b>
          <b id="finalScreenTotalQuestions"></b>
          </div>
        </div>
        <div class="endscreenButtons">
          <button type="button" class="btn btn-primary">Ergebnis teilen</button>
          <button
            type="button"
            class="btn btn-link"
            onclick="location.reload()"
          >
            Erneut spielen
          </button>
        </div>
      </div>
    </div>

    `;
}
