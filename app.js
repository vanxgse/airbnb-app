require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddleware');
const listingRoutes = require('./routes/listingRoutes');

var app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Rutas
app.use('/api/listings', listingRoutes);

// Middleware de errores
app.use(errorHandler);

module.exports = app;
