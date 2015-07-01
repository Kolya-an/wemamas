<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Kurs;

/**
 * KursSearch represents the model behind the search form about `app\models\Kurs`.
 */
class KursSearch extends Kurs
{
    /**
     * @inheritdoc
     */
    public $kursStatusName;
    
    public function rules()
    {
        return [
            [['kurs_id', 'kurs_status_id', 'kurs_teacher_id'], 'integer'],
            [['kurs_name', 'kurs_url', 'kurs_brief', 'kurs_subscribe', 'kurs_anons', 'kurs_tizer', 'kurs_whom', 'kursStatusName'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Kurs::find();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        $query->andFilterWhere([
            'kurs_id' => $this->kurs_id,
//            'kursStatusName' => $this->kursStatusName->kurs_status_name,
            'kurs_teacher_id' => $this->kurs_teacher_id,
        ]);

        $query->andFilterWhere(['like', 'kurs_name', $this->kurs_name])
            ->andFilterWhere(['like', 'kurs_url', $this->kurs_url])
            ->andFilterWhere(['like', 'kurs_brief', $this->kurs_brief])
            ->andFilterWhere(['like', 'kurs_subscribe', $this->kurs_subscribe])
            ->andFilterWhere(['like', 'kurs_anons', $this->kurs_anons])
            ->andFilterWhere(['like', 'kurs_tizer', $this->kurs_tizer])
            ->andFilterWhere(['like', 'kursStatusName', $this->kursStatusName->kurs_status_name])
            ->andFilterWhere(['like', 'kurs_whom', $this->kurs_whom]);

        return $dataProvider;
    }
}
