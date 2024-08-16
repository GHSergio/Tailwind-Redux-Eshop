import React, { useState } from "react";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import CartSummary from "../components/cartStep/CartSummary";
import ShippingInformation from "../components/cartStep/ShippingInformation";
import PaymentDetails from "../components/cartStep/PaymentDetails";
import ReviewOrder from "../components/cartStep/ReviewOrder";

const steps = ["確認購物車", "運送資訊", "付費方式", "確認訂單"];

const CartPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <CartSummary
            selectAll={selectAll}
            setSelectAll={setSelectAll}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        );
      case 1:
        return <ShippingInformation />;
      case 2:
        return <PaymentDetails />;
      case 3:
        return <ReviewOrder />;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        maxWidth: "1000px",
        margin: "20px auto",
        padding: "1rem",
      }}
    >
      <Stepper activeStep={activeStep} sx={{ marginBottom: "1rem" }}>
        {steps.map((label) => (
          <Step key={label}>
            {/* 調整StepIcon */}
            <StepLabel
              StepIconProps={{
                sx: {
                  fontSize: "1.5rem",
                  "@media (max-width: 600px)": {
                    fontSize: "0.85rem",
                  },
                },
              }}
              // 調整StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  "@media (max-width: 600px)": {
                    fontSize: "0.38rem",
                  },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* Step Content */}
      <Box
        sx={{
          maxWidth: "1000px",
          border: "1px solid grey",
          borderRadius: "5px",
          padding: "0.5rem",
        }}
      >
        {renderStepContent(activeStep)}
      </Box>
      {/* Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="contained"
          color="secondary"
        >
          上一步
        </Button>
        <Button
          onClick={handleNext}
          variant="contained"
          color="primary"
          disabled={activeStep === steps.length - 1}
        >
          {activeStep === steps.length - 1 ? "下訂單" : "下一步"}
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
