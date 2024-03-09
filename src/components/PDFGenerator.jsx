import React from "react";
import { books } from "../data";
import { useParams } from "react-router-dom";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const PdfGenerator = () => {
  const { id } = useParams();
  const pdfRef = React.createRef();

  const book = books.find((data) => data.id === id);
  console.log(book);

  const Markupfile = () => {
    return (
     <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={{textAlign: "center", fontSize: '40px', margin: '10px 0', padding: '10px', fontWeight: 'bold'}}>{book.name}</Text>
            <Text style={{textAlign: 'center', margin: '10px 0', padding: '10px', fontSize: '30px'}}>CATEGORY:{book.category}</Text>
            <Text style={{textAlign: 'center', margin: '10px 0', padding: '10px', fontSize: '30px'}}>VOLUME:{book.volumes}</Text>
            <Text style={{textAlign: 'center', margin: '10px 0', padding: '10px', fontSize: '30px'}}>ISBN:{book.ISBN}</Text>
          </View>
        </Page>
      </Document>
      

    );
  };

  return (
    <>
      {!book ? (
        <div>Not found</div>
      ) : (
        <div style={{margin: '0 auto', textAlign: 'center'}}>
          <h1>Printout</h1>
          <PDFViewer width="500" height="400">
            <Markupfile ref={pdfRef} />
          </PDFViewer>
          <PDFDownloadLink document={<Markupfile />} fileName="example.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
          
        </div>
      )}
      <button style={{textAlign: 'center'}}>
          <a href="/">Go to list of books</a>
          </button>
    </>
  );
};

export default PdfGenerator;
