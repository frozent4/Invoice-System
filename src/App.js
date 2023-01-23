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
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 3.9, count: 120 },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.6, count: 400 },
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave ",
      price: 168,
      description:
        "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3.9, count: 70 },
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 },
    },
  ]);
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [helper, setHelper] = useState({
    error: false,
    errorHelper: "",
  });
  const handleClose = () => {
    setOpen(false);
  };

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
        <DialogTitle id="alert-dialog-title">Invoice System</DialogTitle>
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
