//                   Подключаем библиотеки
// Они должны быть указаны в dev зависимостях файла package.json и установлены командой npm i

const gulp = require('gulp'); // сборщик
const plumber = require('gulp-plumber'); // обработчик ошибок в файлах препроцессора
const sourcemap = require('gulp-sourcemaps'); // создание карты стилей
const sass = require('gulp-sass'); // препроцессор SCSS
const postcss = require('gulp-postcss'); // обработчик файла стилей
const autoprefix = require('autoprefixer'); // автоматическая подстановка префиксов для поддержки разных браузеров
const sync = require('browser-sync').create();


//                     Задачи

// Запуск сервера
const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"    // папка из которой сервер берет источники для страницы
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Перезагрузка

const reload = (done) => {
  sync.reload();              // перезагрузка в случае если произошли изменения в исходных файлах
  done();
}

// Отслеживание изменений в исходных файлах

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles)); // отслеживать файлы препроцессора
  gulp.watch("source/js/**/*.js", gulp.series(scripts));  // отслеживать файлы скриптов
  gulp.watch("source/*.html", gulp.series(html, reload)); // отслеживать файлы разметки HTML
}

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

exports.styles = styles;
