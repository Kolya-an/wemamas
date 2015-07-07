<?php

use yii\helpers\Html;
use yii\widgets\DetailView;
use app\models\Category;

/* @var $this yii\web\View */
/* @var $model app\models\User */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Users', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="user-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $user->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $user->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>
<?php if ($user -> category_id === 1) { ?>
    <?= DetailView::widget([
        'model' => $user,
        'attributes' => [
            'id',
            'username',
            'password',
            'categoryUser',
            'profileUser',
            'locationUser',
            'email:email',
            'created_at',
            'subscribeUser',
            
        ],
    ]) ?>
<?php } elseif ($user -> category_id === 3) { ?>
<?= DetailView::widget([
        'model' => $user,
        'attributes' => [
            'id',
            'username',
            'password',
            'categoryUser',
            'profileUser',
            'locationUser',
            'phoneUser',
            'officeUser',
            'websiteUser',
            'email:email',
            'created_at:datetime',
        ],
    ]) ?>
    <?php } else { ?>
    <?= DetailView::widget([
        'model' => $user,
        'attributes' => [
            'id',
//            'bioUser',
            'logoUser:image',
            'photoUser:image',
            'username',
            'password',
            'categoryUser',
            'profileUser',
            'locationUser',
            'phoneUser',
            'officeUser',
            'workUser',
            'experienceUser',
            'percentUser',
            'websiteUser',
            'salaryUser',
            'email:email',
            'created_at:datetime',
        ],
    ]) ?>
     <?php } ?>
    
</div>
