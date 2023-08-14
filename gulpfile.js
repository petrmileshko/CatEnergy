// Подключаем библиотеки
// Они должны быть указаны в dev зависимостях файла package.json и установлены командой npm i

const gulp = require('gulp'); // сборщик
const plumber = require('gulp-plumber'); // обработчик ошибок в файлах препроцессора
const sourcemap = require('gulp-sourcemaps'); // создание карты стилей
const sass = require('gulp-sass'); // препроцессор SCSS
const postcss = require('gulp-postcss'); // обработчик файла стилей
const autoprefix = require('autoprefixer'); // автоматическая подстановка префиксов для поддержки разных браузеров
const sync = require('browser-sync').create();

//Задачи

//Генерация стилей из препроцессора

const styles = () => {
  return gulp.src('source/sass/style.scss') // Загружаем главный препроцесорный файл
  .pipe(plumber()) // подключаем обработчик ошибок
  .pipe(sourcemap.init()) // Фиксация исходного состояния кода в файлах препроцессора
  .pipe(sass()) // запускаем препроцессор чтобы получить файл стилей
  .pipe(postcss(  //запускаем дополнительные плагины для обработки стилей
    [
      autoprefix(sourcemap.write('.'))  // Создание карты стилей
    ]
  ))
  .pipe(gulp.dest('build/css'))
}
