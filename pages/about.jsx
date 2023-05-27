import { pdfjs, Document, Page, PDFDownloadLink } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './CV_PengruiMa.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br />
      <ul>
        <li><span role="img" aria-label="book">📖</span> Working as a software engineer intern @ <a href='https://www.upgrade.com/'>Upgrade, Inc</a>.</li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> Graduated with major in Computer Engineering from <a href='https://www.nyu.edu/'>NYU</a>.</li>
        <li><span role="img" aria-label="light-bulb">💡</span> Open to collaborating on projects and innovative ideas. </li>
        <li><span role="img" aria-label="laptop">💻</span> Currently learning Django, docker and linux. </li>
      </ul>
      <br />
      <center>
        <h3>Resume (<a href={myResume} download="CV_PengruiMa.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page scale={96 / 40} pageIndex={0} />
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
