<?php

namespace app\controllers;

use Yii;
use app\models\UserProfile;
use app\models\UserprofileSearch;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\data\ActiveDataProvider;


/**
 * UserprofilController implements the CRUD actions for UserProfile model.
 */
class UserprofilController extends Controller
{
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['post'],
                ],
            ],
        ];
    }

    /**
     * Lists all UserProfile models.
     * @return mixed
     */
    public function actionIndex()
    {
        $searchModel = new UserprofileSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }
    
     public function actionStaff()
    {     
       $query = UserProfile::find()->where(['category_id' => 3]);
      
       $searchModel = new UserprofileSearch();
       $dataProvider = new ActiveDataProvider(
            [
                'query' => $query,
            ]
        );
      
        
        return $this->render('index', [
           
           'searchModel' => $searchModel,
           'dataProvider' => $dataProvider,
           
        ]);
         
    }
    
      public function actionTeacher()
    {     
       $query = UserProfile::find()->where(['category_id' => 2]);
      
       $searchModel = new UserprofileSearch();
       $dataProvider = new ActiveDataProvider(
            [
                'query' => $query,
            ]
        );
      
        
        return $this->render('index', [
           
           'searchModel' => $searchModel,
           'dataProvider' => $dataProvider,
           
        ]);
         
    }
    
      public function actionStudent()
    {     
       $query = UserProfile::find()->where(['category_id' => 1]);
      
       $searchModel = new UserprofileSearch();
       $dataProvider = new ActiveDataProvider(
            [
                'query' => $query,
            ]
        );
      
        
        return $this->render('index', [
           
           'searchModel' => $searchModel,
           'dataProvider' => $dataProvider,
           
        ]);
         
    }

    /**
     * Displays a single UserProfile model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new UserProfile model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $model = new UserProfile();

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('create', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Updates an existing UserProfile model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        } else {
            return $this->render('update', [
                'model' => $model,
            ]);
        }
    }

    /**
     * Deletes an existing UserProfile model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the UserProfile model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return UserProfile the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = UserProfile::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}