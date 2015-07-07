<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\Kurs */

$this->title = 'Обновить курс: ' . ' ' . $model->kurs_name;
$this->params['breadcrumbs'][] = ['label' => 'Kurs', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->kurs_id, 'url' => ['view', 'id' => $model->kurs_id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="kurs-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
