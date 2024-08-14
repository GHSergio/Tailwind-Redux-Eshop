import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (query: string) => void;
  height?: string | number;
  width?: string | number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, height, width }) => {
  return (
    <TextField
      placeholder="Search"
      variant="outlined"
      onChange={(e) => onSearch?.(e.target.value)}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
        sx: {
          height: height || "auto",
        },
      }}
      sx={{
        width: width || "100%",
      }}
    />
  );
};

export default SearchBar;
