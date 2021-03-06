package com.cinema.wasai.model.entiy;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.io.Serializable;
import java.util.*;


/**
 * 
 * 4.2.7 客服评价表（t_worker_evaluate）
 * 
 **/
@Data
@Slf4j
@NoArgsConstructor
@AllArgsConstructor
@SuppressWarnings("serial")
public class WorkerEvaluate implements Serializable {

	/**主键**/
	private Integer id;

	/**客服主键（关联t_worker表）**/
	private Integer wid;

	/**用户主键（关联t_user表）**/
	private Integer uid;

	/**回复内容**/
	private String content;

	/**类型(满意；不满意；非常满意)**/
	private String type;

	/**添加时间（格式2022-01-14\n11:37:03）**/
	private java.util.Date createTime;

	/**更新时间**/
	private java.util.Date updateTime;


	public void setId(Integer id){
		this.id = id;
	}

	public Integer getId(){
		return this.id;
	}

	public void setWid(Integer wid){
		this.wid = wid;
	}

	public Integer getWid(){
		return this.wid;
	}

	public void setUid(Integer uid){
		this.uid = uid;
	}

	public Integer getUid(){
		return this.uid;
	}

	public void setContent(String content){
		this.content = content;
	}

	public String getContent(){
		return this.content;
	}

	public void setType(String type){
		this.type = type;
	}

	public String getType(){
		return this.type;
	}

	public void setCreateTime(java.util.Date createTime){
		this.createTime = createTime;
	}

	public java.util.Date getCreateTime(){
		return this.createTime;
	}

	public void setUpdateTime(java.util.Date updateTime){
		this.updateTime = updateTime;
	}

	public java.util.Date getUpdateTime(){
		return this.updateTime;
	}

	@Override
	public String toString() {
		return "WorkerEvaluate [id=" + id + ", wid=" + wid + ", uid=" + uid + ", content=" + content + ", type=" + type + ", createTime=" + createTime + ", updateTime=" + updateTime+ "]";
	}
}
