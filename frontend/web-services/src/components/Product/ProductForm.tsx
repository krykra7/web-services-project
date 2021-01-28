import React, {useState} from "react";
import {ProductDto} from "../../dto/ProductDto";
import {
    Button,
    Card, CardActions,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import {AppTextField} from "../Utils";
import {ShopProductDto} from "../../dto/ShopProductDto";

const useStyles = makeStyles((theme) => ({}))

type Props = {
    saveHandler: (productDto: ProductDto) => void;
    cancelHandler: () => void;
    data?: ProductDto;
}

export default function ProductForm(props: Props) {
    const classes = useStyles();
    const [productData, setProductData] = useState({shopProductDtoList: []} as ProductDto)

    const handleProductDataChange = (fieldName: string, fieldValue: string | ShopProductDto[]) => {
        setProductData({...productData, [fieldName]: fieldValue});
    }

    const handleSave = () => {
        props.saveHandler(productData);
        setProductData({shopProductDtoList: []} as ProductDto);
    }

    const handleCancel = () => {
        setProductData({shopProductDtoList: []} as ProductDto);
        props.cancelHandler();
    }

    return (
        <Card>
            <CardHeader title="Dane produktu"/>
            <Divider/>
            <CardContent>
                <Grid container spacing={2} alignItems={"stretch"}>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppTextField
                            label={"Nazwa"}
                            name={"name"}
                            value={productData.name}
                            onChange={handleProductDataChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppTextField
                            label={"Białko"}
                            name={"protein"}
                            value={productData.protein}
                            onChange={handleProductDataChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppTextField
                            label={"węglowodany"}
                            name={"carbs"}
                            value={productData.carbs}
                            onChange={handleProductDataChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppTextField
                            label={"Tłuszcze"}
                            name={"fats"}
                            value={productData.fats}
                            onChange={handleProductDataChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppTextField
                            label={"Kalorie"}
                            name={"name"}
                            value={productData.calories}
                            onChange={handleProductDataChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppTextField
                            label={"Rozmiar"}
                            name={"size"}
                            value={productData.size}
                            onChange={handleProductDataChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} md={3}>
                        <AppTextField
                            label={"Typ"}
                            name={"type"}
                            value={productData.type}
                            onChange={handleProductDataChange}
                        />
                    </Grid>
                </Grid>
                <Divider/>

            </CardContent>
            <CardActions>
                <Button size="small"
                        onClick={handleCancel}>
                    Anuluj
                </Button>
                <Button size="small"
                        variant="outlined"
                        color="primary"
                        onClick={handleSave}>
                    Zapisz
                </Button>
            </CardActions>
        </Card>
    )
}