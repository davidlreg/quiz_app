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
