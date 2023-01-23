import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import { useState } from "react";
import { useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

export default function App() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [helper, setHelper] = useState({
    error: false,
    errorHelper: "",
  });
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  const styles = StyleSheet.create({
    table: {
      display: "table",
      width: "auto",
      // borderStyle: "solid",
      borderWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableCol: {
      width: "25%",
      // borderStyle: "solid",
      borderWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: {
      textAlign: "left",
      margin: "auto",
      marginTop: 5,
      fontSize: 10,
    },
    tableCellCenter: {
      textAlign: "center",
      marginTop: 25,
      marginBottom: 10,
      fontSize: 20,
    },
  });
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellCenter}>FACTURA ELECTRONICA</Text>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Document: </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{data.numberDocument}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Name: </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{data.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Address: </Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{data.address}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
          </View>
          <Text style={styles.tableCellCenter}></Text>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Product</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Price U</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Total</Text>
            </View>
          </View>
          {data.items.map((item) => (
            <>
              <View style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.title}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>${item.price}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>${item.price}</Text>
                </View>
              </View>
            </>
          )) || ""}
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>________________________</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}></Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>
                $
                {data.items.reduce(
                  (acumulador, actual) => acumulador + actual.price,
                  0
                ) || ""}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setOpen(true);
  };
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        sx={{ margin: 2 }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, maxWidth: 850 }}
        >
          <Typography
            variant="h2"
            color="initial"
            align="center"
            sx={{ marginBottom: 2 }}
          >
            Invoice System
          </Typography>
          <Divider sx={{ marginBottom: 3 }} />
          <TextField
            id="document"
            name="document"
            select
            label="Select your document type"
            defaultValue="Dni"
            sx={{ marginInlineEnd: 3, minWidth: 230 }}
            onChange={(event) => {
              setData({ ...data, document: event.target.value });
            }}
          >
            <MenuItem value="Dni">DNI</MenuItem>
            <MenuItem value="Ruc">RUC</MenuItem>
          </TextField>
          <TextField
            id="numberDocument"
            name="numberDocument"
            label="Enter Number Document"
            variant="outlined"
            type={"number"}
            sx={{ marginRight: 3 }}
            error={helper.error}
            onChange={(event) => {
              setData({ ...data, numberDocument: event.target.value });
            }}
            helperText={helper.errorHelper}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ width: 240, height: 55 }}
          >
            Generate Factura
          </Button>
          <br />
          <TextField
            id="name"
            name="name"
            label="Enter Her Name or Business Name"
            variant="outlined"
            onChange={(event) => {
              setData({ ...data, name: event.target.value });
            }}
            fullWidth
            sx={{ marginRight: 3, marginTop: 2 }}
            error={helper.error}
            helperText={helper.errorHelper}
          />
          <TextField
            id="address"
            name="address"
            label="Address of the individual or company"
            variant="outlined"
            onChange={(event) => {
              setData({ ...data, address: event.target.value });
            }}
            fullWidth
            sx={{ marginRight: 3, marginTop: 2 }}
            error={helper.error}
            helperText={helper.errorHelper}
          />
          <Autocomplete
            multiple
            sx={{ marginTop: 2 }}
            options={products || []}
            getOptionLabel={(option) => option.title}
            defaultValue={[]}
            onChange={(e, newValue) =>
              setData({ ...data, items: [...newValue] })
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select Items"
                placeholder="Select Items"
              />
            )}
          />
        </Box>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Invoice System
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          your invoice has been processed
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <PDFDownloadLink document={<MyDocument />} fileName="factura.pdf">
            <Button
              startIcon={<PictureAsPdfIcon />}
              variant="outlined"
              sx={{ marginTop: 2 }}
            >
              Descargar PDF
            </Button>
          </PDFDownloadLink>
        </DialogActions>
      </Dialog>
    </>
  );
}
