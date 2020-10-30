import React from 'react';
import {Typography} from "@material-ui/core";

const handleClick = () => {
  const content = document.getElementById("Content")!;
  content.scrollTop = 0;
};

function ExpandablePageContent() {
  return(
      <div className="Content" id="Content">
        <Typography className="Header">Sensibilisierung mit der Corona-Pandemie im 21. Jahrhundert</Typography>
        <Typography>
          In Deutschland gilt die Meinungsfreiheit. Dieses Gut muss so gut wie möglich - durch die Politik, als auch durch das Volk
          - geschützt werden, und ist deshalb auch in unserem Grundgesetz im fünften Artikel verankert.
        </Typography>
        <Typography className="NoMargin">
          Jeder darf seine Meinung frei äußern und in einem Diskurs mit der Politik treten.
        </Typography>
        <Typography>
          Der gesunde - und in einer Demokratie (welche wir in Deutschland übrigens haben) gewünschte - Diskurs ist allerdings dort als
          kritisch anzusehen, wo Menschen sterben. Alleine in der Bundesrepublik Deutschland haben an der Corona-Pandemie bisher über
          10.000 Menschen ihr Leben gelassen.
        </Typography>
        <Typography>
          So hoch und grausam diese Zahl auch scheinen mag, können wir uns glücklich schätzen, dass COVID-19 in Deutschland nur so
          wenige Menschenleben gefordert hat.. so makaber das auch klingen mag.
        </Typography>
        <Typography className="NoMargin">
          Ein Blick, als Beispiel, in die Vereinigten Staaten von Amerika genügt doch schon, um zu sehen, wie ernst es um Corona steht.
        </Typography>
        <Typography>
          <strong>227.703</strong> (Stand: 29.10.2020, 13:30; Quelle: Johns Hopkins University) ist die Zahl an Menschen, die
          dort den tragischen Kampf um ihr Leben verloren haben. Zum Vergleich: das sind <strong>2,28 mal</strong> so viele Menschen,
          wie im Camp Nou, dem größten Fußballstadion der Welt, Platz finden.
        </Typography>
        <Typography>
          Warum also die Verharmlosung oder gar Leugnung von Corona, wobei wir doch sehen, dass die ganze Welt gerade kämpft?
        </Typography>
        <Typography className="NoMargin">
          Die zehn Minuten Mund-Nase-Bedeckung tragen, die Kontaktbeschränkungen auf zwei Haushalte und der Lockdown Light ist doch bei
          weitem kein Grund, verlorene Menschenleben in Kauf zu nehmen.
        </Typography>
        <Typography>
          Natürlich sind die Maßnahmen nicht perfekt, natürlich könnte man darüber nachdenken Schulen zu schließen und die Wirtschaft
          besser zu stärken, aber die <strong>kollektive Gesundheit</strong> unserer Mitbürger und Mitbürgerinnen hat auf jeden Fall
          Priorität über eine abgebrochene Zacke an Deinem Krönchen, weil Du mal wieder eine Maske anziehen musst.
        </Typography>
        <Typography>
          Auch wenn es vielleicht stimmen mag, dass Corona Dich nie so hart erwischt, dass du Dich am nächsten Tag auf einmal auf der
          Intensivstation wiederfindest, sollte man trotzdem auf die anderen Mitmenschen Rücksicht nehmen, für welche so eine Aussage
          vielleicht nicht selbstverständlich sein mag.
        </Typography>
        <Typography>
          Eine Herdenimmunität, wie sie von vielen Aluhüten angepriesen wird, ist demnach auch nicht so einfach.
          Neuste Studien zeigen (Quelle Quarks), dass eine vergangene Corona-Infektion nicht unbedingt Immunität bedeutet.
        </Typography>
        <Typography className="NoMargin">
          Sollte man Medien überhaupt vertrauen? <strong>Natürlich!</strong> Wir befinden uns in Deutschland keineswegs in einer
          Unterdrückung von "denen da oben" und müssen uns auch keine Sorgen machen, dass die Mainstream-Medien nur noch Propaganda für
          die Regierung ausstrahlen.
        </Typography>
        <Typography>
          Genau dafür werden in Deutschland Rundfunkgebühren gezahlt. Für unabhängige, zensurfreie Berichtserstattung; anders als in
          Nord-Korea oder Russland, wo jede Information hinterfragt werden kann.
        </Typography>
        <Typography>
          Das einzige Problem bei der Berichtserstattung, welche wir in Deutschland haben, sind die Verschwörungstheoretiker
          wie <del>Atilla Hildmann</del> oder seit neustem auch <del>Michael Wendler</del>,
          welche <strong>bewusst</strong> Falschinformationen ohne jegliche Reue zu verspüren, blindlings an ihre Anhänger
          propagieren.
        </Typography>
        <Typography>
          <strong>DAS</strong> ist das eigentliche Problem, welches wir in Mitten der Corona-Pandemie noch zusätzlich gegenüber stehen.
          Schafe, welche ihrem Hüter vertrauen, und Hüter, welche das ausnutzen. Volkshetze gegen den Staat auf bester Ebene.
        </Typography>
        <Typography className="NoMargin">
          Ein freier Zugang zu Berichtserstattung ist in Deutschland gesichert. Sich zu informieren ein hohes Gut.
        </Typography>
        <Typography>
          Das zu realisieren ist für manche Personen (fast schon Personengruppen) sehr schwer. Kein Google, und auch keine andere
          Suchmaschine versucht Euch zu manipulieren. Also bitte: <strong>nutzt diese</strong> auch und vertraut dem wissenschaftlichen
          Konsens.
        </Typography>
        <Typography>
          Solange wir Corona nicht sicher gegenüber stehen können, und auch noch keinen Impfstoff haben, geht die Gesundheit
          <strong> aller Mitbürger</strong> vor unserer persönlicher Entfaltung.
        </Typography>
        <Typography>
          Bleibt daheim, schaut ein bisschen Fernsehen und genießt die Zeit.. sie geht auch irgendwann wieder vorbei, und wir kehren
          in ein "normales" Leben zurück - falls wir bis dahin <strong>noch leben</strong>.
        </Typography>
        <Typography>
          Informiert Euch! Glaubt keinen Idioten, die irgendwas herunter schreien und Anhänger manipulieren wollen. Den etablierten
          Medien in Deutschland ist <strong>zu vertrauen!</strong>
        </Typography>
        <Typography>
          Durch diese Pandemie schaffen wir es nur zusammen - und nicht alleine.
        </Typography>
        <Typography className="SmallBottom">
          Stand: 29. Oktober 2020
        </Typography>
        <Typography className={"SmallBottom BackToTop"} onClick={() => handleClick()}>
          Zurück nach oben
        </Typography>
      </div>
  );
}

export default ExpandablePageContent;
