<?php
class sae_upload{
public $domain="imagesource";//��
public $path="upload";//�ϴ�Ŀ¼
public $type="png|jpg|gif";//�ļ�����
public $name="xxfaxy";//������
public $save_name;//�����ļ���
public $url;
public function __construct($save_name=""){$this->save_name=$save_name;}
public function upload(){
$result=array();//���ص�����
$basename=basename($_FILES[$this->name]["name"]);//ԭʼ�ļ���
$extension=pathinfo($basename,PATHINFO_EXTENSION);//��չ��
$data=explode("|",trim(strtolower($this->type)));//������ϴ�����תΪ����
if(in_array($extension,$data)){
$upload_path=@SAE_TMP_PATH.$this->path;
move_uploaded_file($_FILES[$this->name]["tmp_name"],$upload_path);
$content=file_get_contents($upload_path);
$temp=new SaeStorage();
if($this->save_name==""){$filename=$this->path."/".$basename;}//ԭ���Ʊ���
else{$filename=$this->path."/".$this->save_name.".".$extension;}//����������Ʊ���
$temp->write($this->domain,$filename,$content);//д���ļ�
$this->url=$temp->getUrl($this->domain,$filename);//��ȡ��ַ
$property=$temp->getAttr($this->domain,$filename);//��ȡ�ļ�����
$result["url"]=$this->url;
$result["property"]=$property;
$result["success"]="1";
}
else{
$result["success"]="0";
}
return $result;
}
public function returnname(){
	return $this->url;
}
}
/*
������Ϣ
����΢��:http://weibo.com/xxfaxy
����:xxfaxy@qq.com
*/
?>